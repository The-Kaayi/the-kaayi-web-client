import "@/styles/base/reset.scss";
import styles from "./page.module.scss";
import Maintenance from "@/components/Maintenance/Maintenance";

const Test: React.FC = () => {
  return (
    <div className={styles.test}>
      <Maintenance />
    </div>
  );
};

export default Test;
