"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import appLogo from "../../../public/app-logo.svg";
import overviewIcon from "../../../public/images/AdminSideBar/overview.svg";
import missionsIcon from "../../../public/images/AdminSideBar/missions.svg";
import rewardsIcon from "../../../public/images/AdminSideBar/rewards.svg";
import settingsIcon from "../../../public/images/AdminSideBar/settings.svg";
import styles from "./AdminSideBar.module.scss";

const Sidebar: React.FC<{}> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState("overview");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const segments = pathname.split("/admin-panel/");
    const path = segments[1] || "overview";
    setCurrentPath(path);
  }, [pathname]);

  const localizedSidebarItems: MenuProps["items"] = [
    {
      label: "Overview",
      key: "/",
      icon: <Image src={overviewIcon} alt="Overview Icon" width={25} />,
    },
    {
      label: "Missions",
      key: "missions",
      icon: <Image src={missionsIcon} alt="Missions Icon" width={25} />,
    },
  ];

  const localizedSidebarBottomItems = [
    {
      label: "Settings",
      key: "profile",
      icon: <Image src={settingsIcon} alt="Settings Icon" width={25} />,
    },
  ];

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "/") {
      setCurrentPath("overview");
      router.push("/admin-panel");
    } else {
      setCurrentPath(e.key);
      router.push(`/admin-panel/${e.key}`);
    }
  };

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(styles.sidebar, {
        [styles.sidebarActive]: isActive,
      })}
    >
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Image className={styles.appLogo} src={appLogo} alt="App Logo" />
        </div>
      </div>
      <div
        className={classNames(styles.sidebarContainer, {
          [styles.sidebarActive]: isActive,
        })}
      >
        <Menu
          mode="inline"
          className={styles.sideOptions}
          onClick={onClick}
          selectedKeys={[currentPath]}
          items={localizedSidebarItems}
        ></Menu>
        <Menu
          mode="inline"
          onClick={onClick}
          selectedKeys={[currentPath]}
          items={localizedSidebarBottomItems}
        ></Menu>
      </div>
    </aside>
  );
};

export default Sidebar;
