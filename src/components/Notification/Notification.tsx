import { notification } from "antd";
import styles from "./Notification.module.scss";

type NotificationType = {
  title: string;
  type: "success" | "info" | "warning" | "error";
  description: string;
};

const Notification = ({ title, type, description }: NotificationType) => {
  notification[type]({
    message: (
      <div className={styles.notificationWrapper}>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    ),
    duration: 2,
    placement: "top",
    className: styles.notification,
    closeIcon: false,
  });
};

export default Notification;
