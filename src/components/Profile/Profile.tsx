"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import userAvatar from "../../../public/images/Profile/users-avatar.svg";
import editIcon from "../../../public/images/MissionCard/edit.svg";
import styles from "./Profile.module.scss";

const Profile: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user) {
        const q = query(
          collection(db, "users"),
          where("userID", "==", user.uid)
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
    <div className={styles.profile}>
      <Image className={styles.editIcon} src={editIcon} alt="Edit Icon" />
      <Image className={styles.userAvatar} src={userAvatar} alt="User Avatar" />
      <div className={styles.userDetails}>
        <p className={styles.userName}>
          {userInfo?.firstName} {userInfo?.lastName}
        </p>
        <p className={styles.userEmail}>{userInfo?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
