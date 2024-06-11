import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import cardImage from "../../../../public/images/MissionCard/card-image.jpg";
import editIcon from "../../../../public/images/MissionCard/edit.svg";
import styles from "./MissionCard.module.scss";

const MissionCard: React.FC<{ missionUUID: string, missionData: any }> = ({ missionUUID, missionData }) => {
  const status: string = "Active";

  console.log(missionData.missionDetails)
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
        <p className={styles.shopTitle}>{missionData.shopDetails.shopName}</p>
        <p className={styles.shopLocation}>{missionData.shopDetails.shopLocation}</p>
      </div>

      <div className={styles.missionInfo}>
        <Link href={`missions/${missionUUID}`} className={styles.missionTitle}>
          {missionData.missionDetails.missionName}
        </Link>
        <p className={styles.missionDesc}>
          {missionData.missionDetails.missionDescription}
        </p>
      </div>
    </div>
  );
};

export default MissionCard;
