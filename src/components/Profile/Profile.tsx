import Image from "next/image";
import userAvatar from "../../../public/images/Profile/users-avatar.svg";
import editIcon from "../../../public/images/MissionCard/edit.svg";
import styles from "./Profile.module.scss";

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Image className={styles.editIcon} src={editIcon} alt="Edit Icon" />
      <Image className={styles.userAvatar} src={userAvatar} alt="User Avatar" />
      <div className={styles.userDetails}>
        <p className={styles.userName}>John Doe</p>
        <p className={styles.userEmail}>FqKpV@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
