import Link from "next/link";
import styles from "./MissionCard.module.scss";

const MissionCard: React.FC<{ missionUUID: string }> = ({ missionUUID }) => {

  const onCardClick = () => {
    
  }
  return (
    <div className={styles.missionCard}>
      <p>Mission Card {missionUUID}</p>
      <Link href={`missions/${missionUUID}`} className={styles.viewBtn}>
        View Details
      </Link>
    </div>
  );
};

export default MissionCard;
