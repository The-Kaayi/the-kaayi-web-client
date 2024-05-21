import styles from "./page.module.scss";

const missionUUID = ({ params }: { params: { missionUUID: string } }) => {
  const { missionUUID } = params;
  return (
    <div className={styles.mission}>
      <h1>Details of Mission {missionUUID}</h1>
    </div>
  );
};

export default missionUUID;
