import Link from "next/link";
import Image from "next/image";
import cardImage from "../../../../public/images/MissionCard/card-image.jpg";
import editIcon from "../../../../public/images/MissionCard/edit.svg";
import styles from "./MissionCard.module.scss";

const MissionCard: React.FC<{ missionUUID: string }> = ({ missionUUID }) => {
  return (
    <div className={styles.missionCard}>
      <div className={styles.shopInfo}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.shopLogo}
            src={cardImage}
            alt="Mission Image"
          />
          <Link href={`missions/edit-mission/${missionUUID}`}>
            <Image className={styles.editIcon} src={editIcon} alt="Edit Icon" />
          </Link>
        </div>
        <p className={styles.shopTitle}>Shop Title</p>
        <p className={styles.shopLocation}>Shop Location</p>
      </div>

      <div className={styles.missionInfo}>
        <p className={styles.missionTitle}>Mission Title</p>
        <p className={styles.missionDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>

      <Link href={`missions/${missionUUID}`} className={styles.viewBtn}>
        View details
      </Link>
    </div>
  );
};

export default MissionCard;
