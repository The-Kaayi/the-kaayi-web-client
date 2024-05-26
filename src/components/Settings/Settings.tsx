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
    <div>
      <button className={styles.deleteBtn} onClick={onDeleteClick}>
        Delete account
      </button>

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
