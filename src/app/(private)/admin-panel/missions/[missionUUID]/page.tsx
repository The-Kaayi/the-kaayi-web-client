import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
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
