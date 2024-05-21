import Link from "next/link";
import styles from "./page.module.scss";

const CreateMission: React.FC = () => {
  return (
    <div className={styles.createMission}>
      <h1>Create Mission</h1>
      <Link href="/admin-panel/missions">Back</Link>
    </div>
  );
};

export default CreateMission;
