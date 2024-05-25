"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import notifIcon from "../../../public/images/AdminHeader/notification.svg";
import searchIcon from "../../../public/images/AdminHeader/search.svg";
import downArrowIcon from "../../../public/images/AdminHeader/down-arrow.svg";
import styles from "./AdminHeader.module.scss";

const userName = "John Doe";

const userDropdownItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/admin-panel/profile">Profile </Link>,
    icon: "",
  },
  {
    key: "2",
    label: "Logout",
    icon: "",
  },
];

const AdminHeader: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.adminHeader}>
      <div className={styles.searchBar}>
        <Image className={styles.searchIcon} src={searchIcon} alt="Search" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearch}
        />
      </div>
      <div className={styles.userInfo}>
        <Image
          className={styles.notifIcon}
          src={notifIcon}
          alt="Notification"
        />
        <Dropdown
          className={styles.userDropdown}
          menu={{ items: userDropdownItems }}
          overlayClassName={styles.userDropdownMenu}
        >
          <div>
            <div className={styles.userImg}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>{userName}</p>
              <Image
                className={styles.downArrowIcon}
                src={downArrowIcon}
                alt="Down Arrow"
              />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default AdminHeader;
