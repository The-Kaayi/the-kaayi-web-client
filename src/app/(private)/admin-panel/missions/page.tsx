"use client";
import Link from "next/link";
import MissionCard from "@/components/Missions/MissonCard/MissionCard";
import styles from "./page.module.scss";

const Missions: React.FC = () => {
  const missions = Array.from({ length: 7 }, (_, i) => ({
    uuid: (i + 1).toString(),
  }));

  const renderMissionCards = () => {
    return missions.map((mission, i) => (
      <MissionCard missionUUID={mission.uuid} key={i} />
    ));
  };

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
