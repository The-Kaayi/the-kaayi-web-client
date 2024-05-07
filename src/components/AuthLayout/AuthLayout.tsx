import { AuthTypes } from "@/types/auth";
import styles from "./AuthLayout.module.scss";

const AuthLayout: React.FC<{ authAction: AuthTypes }> = ({ authAction }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        <div className={styles.authContent}>{authAction}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
