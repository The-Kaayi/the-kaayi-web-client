"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import styles from "./page.module.scss";

type Mission = {
  uuid: string;
  shopDetails: {
    shopName: string;
    shopLocation: string;
    shopLogo: string;
  };
  missionDetails: {
    missionName: string;
    missionDescription: string;
  };
  questions: any[];
};

const MissionUUID = ({ params }: { params: { missionUUID: string } }) => {
  const { missionUUID } = params;
  const [mission, setMission] = useState<Mission | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const missionDoc = doc(db, "missions", missionUUID);
        const missionSnapshot = await getDoc(missionDoc);

        if (missionSnapshot.exists()) {
          setMission({
            uuid: missionUUID,
            ...missionSnapshot.data(),
          } as Mission);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching mission: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMission();
  }, [missionUUID]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!mission) {
    return <p>No mission found.</p>;
  }

  return (
    <div className={styles.mission}>
      <h1>{mission.missionDetails.missionName}</h1>
      <div>
        <h2>Shop Details</h2>
        <p>Name: {mission.shopDetails.shopName}</p>
        <p>Location: {mission.shopDetails.shopLocation}</p>
        {/* <img src={mission.shopDetails.shopLogo} alt="Shop Logo" /> */}
      </div>
      <div>
        <h2>Mission Details</h2>
        <p>Title: {mission.missionDetails.missionName}</p>
        <p>Description: {mission.missionDetails.missionDescription}</p>
      </div>
      <div>
        <h2>Questions</h2>
        {mission.questions.map((question, index) => (
          <div key={index}>
            <p>
              Question {index + 1}: {question.question}
            </p>
            <p>Type: {question.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionUUID;
