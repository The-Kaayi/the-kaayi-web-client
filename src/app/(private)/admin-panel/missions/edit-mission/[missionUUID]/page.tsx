import styles from "./page.module.scss";

const EditMission = ({ params }: { params: { missionUUID: string } }) => {
  const { missionUUID } = params;
  return (
    <div className={styles.editMission}>
      <h1>Edit Mission {missionUUID}</h1>
    </div>
  );
};
export default EditMission;
