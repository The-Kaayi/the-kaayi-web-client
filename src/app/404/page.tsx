import Link from "next/link";
import styles from "./page.module.scss";

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>404</h2>
          <p className={styles.desc1}>Oops! Page Not Found.</p>
          <p className={styles.desc2}>
            Sorry, we could not find what you were looking for.
          </p>
        </div>
        <Link className={styles.link} href="/">
          Go Back Home
        </Link>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2023 The Kaayi. All rights reserved.</p>
        <Link className={styles.link} href="/terms-of-service">Terms of Service</Link>{" "}
        <Link className={styles.link} href="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Custom404;
