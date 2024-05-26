"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import appLogo from "../../../public/app-logo.svg";
import downArrowIcon from "../../../public/images/AdminHeader/down-arrow.svg";
import styles from "./Navbar.module.scss";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/admin-panel",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const Navbar: React.FC = () => {
  const [user, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.set("loggedIn", "false");
      window.location.reload();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const userDropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/admin-panel/profile">Profile</Link>,
      icon: "",
    },
    {
      key: "2",
      label: <span onClick={handleLogout}>Logout</span>,
      icon: "",
    },
  ];

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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Image className={styles.logo} src={appLogo} alt="App Logo" />
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link className={styles.navItem} href={item.link} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.navRight}>
        {userInfo ? (
          <Dropdown
            className={styles.userDropdown}
            menu={{ items: userDropdownItems }}
            overlayClassName={styles.userDropdownMenu}
          >
            <div>
              <div className={styles.userImg}>
                {userInfo.firstName.charAt(0).toUpperCase()}
              </div>
              <div className={styles.userDetails}>
                <p className={styles.userName}>
                  {userInfo?.firstName || "User"}
                </p>
                <Image
                  className={styles.downArrowIcon}
                  src={downArrowIcon}
                  alt="Down Arrow"
                />
              </div>
            </div>
          </Dropdown>
        ) : (
          <>
            <Link href="/login" className={styles.loginBtn}>
              Login
            </Link>
            <Link href="/signup" className={styles.signupBtn}>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
