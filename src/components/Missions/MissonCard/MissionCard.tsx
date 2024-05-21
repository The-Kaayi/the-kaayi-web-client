import Link from "next/link";
import styles from "./MissionCard.module.scss";

const MissionCard: React.FC<{ missionUUID: string }> = ({ missionUUID }) => {
  return (
    <div className={styles.missionCard}>
      <p>Mission Card {missionUUID}</p>
      <div className={styles.btnContainer}>
        <Link href={`missions/${missionUUID}`} className={styles.viewBtn}>
          View 
        </Link>
        <Link href={`missions/${missionUUID}/edit`} className={styles.editBtn}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default MissionCard;
