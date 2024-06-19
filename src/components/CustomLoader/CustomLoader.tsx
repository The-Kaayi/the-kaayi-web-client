import { newtonsCradle } from "ldrs";
import styles from "./CustomLoader.module.scss";

newtonsCradle.register();

const CustomLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <l-newtons-cradle size="78" speed="1.4" color="#0da144"></l-newtons-cradle>
    </div>
  );
};

export default CustomLoader;
