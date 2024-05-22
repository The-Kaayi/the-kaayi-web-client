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

      <div className={styles.content}>
        <div className={styles.shopDetails}>
          <h3 className={styles.title}>Shop Details</h3>
          <div className={styles.details}>
            <div className={styles.subContainer}>
              <label className={styles.label}>Name</label>
              <input className={styles.input} type="text" placeholder="Name" />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Location"
              />
            </div>
          </div>
        </div>

        <div className={styles.missionDetails}>
          <h3 className={styles.title}>Mission Details</h3>
          <div className={styles.details}>
            <div className={styles.subContainer}>
              <label className={styles.label}>Title</label>
              <input className={styles.input} type="text" placeholder="Title" />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMission;
