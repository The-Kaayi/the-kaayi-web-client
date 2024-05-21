import Link from "next/link";
import styles from "./page.module.scss";

const Missions: React.FC = () => {
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
    </div>
  );
};

export default Missions;
