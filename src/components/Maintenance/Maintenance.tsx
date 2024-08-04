import Image from "next/image";
import maintenanceIcon from "../../../public/images/Maintenance/maintencance.svg";
import styles from "./Maintenance.module.scss";

const Maintenance: React.FC = () => {
  return (
    <div className={styles.maintenance}>
      <Image
        className={styles.icon}
        src={maintenanceIcon}
        alt="Maintenance Icon"
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sorry! We Are Under Maintenance</h1>
        <p className={styles.desc}>
          Sorry for the inconvenience, but performing some maintenance at the
          moment.
          <br />
          If you need to reach us, you can always contact us at{" "}
          <a
            href="mailto:support@thekaayi.com"
            className={styles.emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            support@thekaayi.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
