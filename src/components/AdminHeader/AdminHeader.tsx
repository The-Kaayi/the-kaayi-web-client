"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import notifIcon from "../../../public/images/AdminHeader/notification.svg";
import searchIcon from "../../../public/images/AdminHeader/search.svg";
import downArrowIcon from "../../../public/images/AdminHeader/down-arrow.svg";
import styles from "./AdminHeader.module.scss";

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
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState<any>(null);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user) {
        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserInfo(userData);
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserInfo();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

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
              {userInfo?.firstName.charAt(0).toUpperCase()}
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>{userInfo?.firstName}</p>
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
