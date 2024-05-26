"use client";
import Link from "next/link";
import Notification from "@/components/Notification/Notification";
import MissionCard from "@/components/Missions/MissonCard/MissionCard";
import styles from "./page.module.scss";

const Missions: React.FC = () => {
  const missions = Array.from({ length: 0 }, (_, i) => ({
    uuid: (i + 1).toString(),
  }));

  const renderMissionCards = () => {
    return missions.map((mission, i) => (
      <MissionCard missionUUID={mission.uuid} key={i} />
    ));
  };

  const onBtnClick = () => {
    Notification({
      type: "success",
      title: "Mission created successfully",
      description: "Your mission was created successfully.",
    });
  };

  return (
    <div className={styles.missions}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Missions</h2>
        <button
          onClick={onBtnClick}
          // href="/admin-panel/missions/create-mission"
          className={styles.addBtn}
        >
          + Add a new mission
        </button>
      </div>
      <div className={styles.content}>
        {missions.length > 0 ? (
          renderMissionCards()
        ) : (
          <p className={styles.noMissionsText}>No Missions Available</p>
        )}
      </div>
    </div>
  );
};

export default Missions;
