"use client";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import styles from "./Settings.module.scss";

const Settings: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onDeleteClick = () => {
    setOpen(true);
  };

  const onConfirmDelete = () => {
    console.log("Item deleted.");
    setOpen(false);
  };

  return (
    <div className={styles.settings}>
      <div className={styles.subContainer}>
        <h3 className={styles.title}>Change Password</h3>
        <div className={styles.content}>
          <p className={styles.description}>
            To ensure the security of your account, it is recommended to change
            your password regularly. Make sure your new password is strong,
            combining uppercase and lowercase letters, numbers, and special
            characters. Please do not share your password with anyone.
          </p>
          <div className={styles.passwordForm}>
            <input
              className={styles.passwordInput}
              type="password"
              placeholder="Current Password"
            />
            <input
              className={styles.passwordInput}
              type="password"
              placeholder="New Password"
            />
            <input
              className={styles.passwordInput}
              type="password"
              placeholder="Confirm New Password"
            />
            <button className={styles.saveBtn}>Save</button>
          </div>
        </div>
      </div>

      <div className={styles.subContainer}>
        <h3 className={styles.title}>Delete Account</h3>
        <div className={styles.content}>
          <p className={styles.description}>
            <span className={styles.warning}>Warning: </span>Deleting your account is permanent and cannot be undone.
            All your data, including your profile, missions, history and preferences, will
            be permanently erased. Please make sure you have downloaded any
            important information before proceeding.
          </p>
          <button className={styles.deleteBtn} onClick={onDeleteClick}>
            Delete account
          </button>
        </div>
      </div>

      <DeleteModal
        title="Delete Account"
        content="Are you sure you want to delete your account? All the data associated with your account will be permanently deleted. This action cannot be undone."
        onConfirm={onConfirmDelete}
        onCancel={() => setOpen(false)}
        open={open}
      />
    </div>
  );
};

export default Settings;
