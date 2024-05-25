import Link from "next/link";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import arrowIcon from "../../../../../public/images/Missions/arrow-right.svg";
import styles from "./page.module.scss";

const tabsItems: TabsProps["items"] = [
  {
    key: "1",
    label: `Profile`,
    children: "Profile Details",
  },
  {
    key: "2",
    label: `Settings`,
    children: "Passowrd Settings",
  },
];

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Profile & Settings</h2>
        <Link className={styles.backBtn} href="/admin-panel">
          <Image className={styles.backIcon} src={arrowIcon} alt="Arrow Icon" />
          Go Back
        </Link>
      </div>

      <Tabs defaultActiveKey="1"  items={tabsItems} />
    </div>
  );
};

export default Profile;
