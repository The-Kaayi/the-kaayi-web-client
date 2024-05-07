import Image from "next/image";
import appLogo from "../../../../public/app-logo.svg";
import styles from "./AppDetails.module.scss";

const AppDetails: React.FC = () => {
  return (
    <div className={styles.appDetails}>
      <p className={styles.appTagline}>
        Indulge in
        <br /> vibrant
        <br /> local flavors!
      </p>
      <div className={styles.appLogoContainer}>
        <Image className={styles.appLogo} src={appLogo} alt="App Logo" />
      </div>
    </div>
  );
};

export default AppDetails;
