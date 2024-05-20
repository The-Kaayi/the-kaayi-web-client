"use client";
import { useState } from "react";
import Image from "next/image";
import notifIcon from "../../../public/images/AdminHeader/notification.svg";
import searchIcon from "../../../public/images/AdminHeader/search.svg";
import styles from "./AdminHeader.module.scss";

const userName = "John Doe";

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
        <div className={styles.userImg}>{userName.charAt(0).toUpperCase()}</div>
        <p className={styles.userName}>{userName}</p>
      </div>
    </div>
  );
};

export default AdminHeader;
