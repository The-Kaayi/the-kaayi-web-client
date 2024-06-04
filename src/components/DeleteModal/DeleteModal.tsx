import { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import warningIcon from "../../../public/images/DeleteModal/warning.svg";
import styles from "./DeleteModal.module.scss";

interface Props {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  open: boolean;
}

const DeleteModal: React.FC<Props> = ({
  title,
  content,
  onConfirm,
  onCancel,
  open,
}) => {
  const [confirmText, setConfirmText] = useState("");

  const handleConfirmText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmText(e.target.value);
  };

  const handleCancel = () => {
    onCancel();
    setConfirmText("");
  };

  const handleDelete = async () => {
    try {
      onConfirm();
    } catch (error) {
      console.log("Item cannot be deleted.", error);
    }
  };

  const titleContent = (title: string) => {
    return (
      <div className={styles.titleContent}>
        <Image
          className={styles.warningIcon}
          src={warningIcon}
          alt="Warning Icon"
        />
        <span>{title}</span>
      </div>
    );
  };

  return (
    <Modal
      title={titleContent(title)}
      open={open}
      onCancel={handleCancel}
      closable={false}
      classNames={{
        content: styles.modalContent,
        body: styles.modalBody,
        header: styles.modalHeader,
        footer: styles.modalFooter,
      }}
      footer={
        <>
          <button
            className={styles.deleteBtn}
            disabled={confirmText !== "delete" && confirmText !== "Delete"}
            onClick={handleDelete}
          >
            Delete Account
          </button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </>
      }
    >
      <p className={styles.modalText}>{content}</p>
      <input
        type="input"
        name="confirmText"
        value={confirmText}
        className={styles.modalInput}
        onChange={handleConfirmText}
        placeholder="Type in 'delete' to confirm"
      />
    </Modal>
  );
};

export default DeleteModal;
