import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../../../../../public/images/Missions/arrow-right.svg";
import styles from "./page.module.scss";

const CreateMission: React.FC = () => {
  return (
    <div className={styles.createMission}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Create a new mission</h2>
        <Link className={styles.backBtn} href="/admin-panel/missions">
          <Image className={styles.backIcon} src={arrowIcon} alt="Arrow Icon" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CreateMission;
