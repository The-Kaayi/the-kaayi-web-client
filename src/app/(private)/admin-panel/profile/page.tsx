import Link from "next/link";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import arrowIcon from "../../../../../public/images/Missions/arrow-right.svg";
import Profile from "@/components/Profile/Profile";
import styles from "./page.module.scss";

const tabsItems: TabsProps["items"] = [
  {
    key: "1",
    label: `Profile`,
    children: <Profile />,
  },
  {
    key: "2",
    label: `Settings`,
    children: "Passowrd Settings",
  },
];

const ProfileSettings: React.FC = () => {
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Profile & Settings</h2>
      <Tabs className={styles.tabs} defaultActiveKey="1" items={tabsItems} />
    </div>
  );
};

export default ProfileSettings;
