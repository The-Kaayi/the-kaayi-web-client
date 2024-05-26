import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../../../../../public/images/Missions/arrow-right.svg";
import FileUpload from "@/components/FileUpload/FileUpload";
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
              <input
                className={styles.input}
                type="text"
                placeholder=" Enter the shop name"
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter the shop location"
              />
            </div>
            <div className={styles.subContainer}>
              <div className={styles.label}>Logo</div>
              <FileUpload maxFileSize={1} />
            </div>
          </div>
        </div>

        <div className={styles.missionDetails}>
          <h3 className={styles.title}>Mission Details</h3>
          <div className={styles.details}>
            <div className={styles.subContainer}>
              <label className={styles.label}>Title</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter the mission title"
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter the mission description"
              />
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.postBtn}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMission;
