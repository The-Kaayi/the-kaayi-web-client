import styles from "./page.module.scss";

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>We&apos;d love to hear from you</h2>
      </div>
      <div className={styles.form}>
        <p>Form Container</p>
      </div>
    </div>
  );
};

export default ContactUs;
