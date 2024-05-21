import styles from "./page.module.scss";

const Missions: React.FC = () => {
  return (
    <div className={styles.missions}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Missions</h2>
        <button className={styles.addBtn}>+ Add a new mission</button>
      </div>
    </div>
  );
};

export default Missions;
