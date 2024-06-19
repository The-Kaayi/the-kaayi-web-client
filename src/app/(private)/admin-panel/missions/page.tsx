"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MissionCard from "@/components/Missions/MissonCard/MissionCard";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import styles from "./page.module.scss";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

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

const Missions: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "missions"));
        const missionsList: Mission[] = querySnapshot.docs.map((doc) => ({
          uuid: doc.id,
          ...doc.data(),
        })) as Mission[];
        setMissions(missionsList);
      } catch (error) {
        console.error("Error fetching missions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className={styles.missions}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Missions</h2>
        <Link
          href="/admin-panel/missions/create-mission"
          className={styles.addBtn}
        >
          + Add a new mission
        </Link>
      </div>
      <div className={styles.content}>
        {loading ? (
          <CustomLoader />
        ) : missions.length > 0 ? (
          missions.map((mission) => (
            <MissionCard
              key={mission.uuid}
              missionUUID={mission.uuid}
              missionData={mission}
            />
          ))
        ) : (
          <p className={styles.noMissionsText}>No Missions Available</p>
        )}
      </div>
    </div>
  );
};

export default Missions;
