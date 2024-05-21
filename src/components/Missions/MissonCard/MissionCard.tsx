import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import cardImage from "../../../../public/images/MissionCard/card-image.jpg";
import editIcon from "../../../../public/images/MissionCard/edit.svg";
import styles from "./MissionCard.module.scss";

const MissionCard: React.FC<{ missionUUID: string }> = ({ missionUUID }) => {
  const status: string = "Active";
  return (
    <div className={styles.missionCard}>
      <div className={styles.shopInfo}>
        <div className={styles.logoContainer}>
          <Link href={`missions/${missionUUID}`}>
            <Image
              className={styles.shopLogo}
              src={cardImage}
              alt="Mission Image"
            />
          </Link>
          <Link href={`missions/edit-mission/${missionUUID}`}>
            <Image className={styles.editIcon} src={editIcon} alt="Edit Icon" />
          </Link>
          <p
            className={classNames(styles.status, {
              [styles.closed]: status === "Closed",
            })}
          >
            {status}
          </p>
        </div>
        <p className={styles.shopTitle}>Shop Title</p>
        <p className={styles.shopLocation}>Shop Location</p>
      </div>

      <div className={styles.missionInfo}>
        <Link href={`missions/${missionUUID}`} className={styles.missionTitle}>
          Mission Title
        </Link>
        <p className={styles.missionDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
