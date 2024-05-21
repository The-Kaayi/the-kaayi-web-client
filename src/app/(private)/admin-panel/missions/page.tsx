import Link from "next/link";
import MissionCard from "@/components/Missions/MissonCard/MissionCard";
import styles from "./page.module.scss";

const Missions: React.FC = () => {
  const renderMissionCards = () => {
    return Array.from({ length: 5 }, (_, i) => <MissionCard key={i} />);
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
      <div className={styles.content}> {renderMissionCards()}</div>
    </div>
  );
};

export default Missions;
