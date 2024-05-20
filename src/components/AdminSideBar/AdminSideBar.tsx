import Image from "next/image";
import appLogo from "../../../public/app-logo.svg";
import styles from "./AdminSideBar.module.scss";

const AdminSideBar: React.FC = () => {
  return (
    <div className={styles.adminSideBar}>
      <Image className={styles.appLogo} src={appLogo} alt="App Logo" />
      <h2>Admin Side Bar</h2>
    </div>
  );
};

export default AdminSideBar;
