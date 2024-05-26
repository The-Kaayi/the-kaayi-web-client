"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import upload from "../../../public/images/FileUpload/upload.svg";
import styles from "./FileUpload.module.scss";

const FileUpload: React.FC<{ maxFileSize: number }> = ({ maxFileSize }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const maxFileSizeBytes = maxFileSize * 1024 * 1024;

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.size > maxFileSizeBytes) {
      setErrorMessage(`The file size is greater than ${maxFileSize} MB.`);
      return;
    }
    const fileURL = URL.createObjectURL(file);
    setUploadedFile(fileURL);
    setIsVideo(file.type.startsWith("video/"));
    setErrorMessage(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragAndDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div
      className={styles.fileUpload}
      onDragOver={handleDragAndDrop}
      onDrop={handleDragAndDrop}
    >
      {!uploadedFile && (
        <div className={styles.infoContainer}>
          <Image className={styles.uploadIcon} src={upload} alt="upload" />
          <div className={styles.uploadInfo}>
            <button className={styles.uploadBtn} onClick={handleButtonClick}>
              Click here
            </button>
            to upload the logo or drag and drop
          </div>

          <p className={styles.fileFormats}>Supported Formats: jpg, png, svg</p>
          <p className={styles.maxFileSize}>
            Maximum file size: {maxFileSize}MB
          </p>
        </div>
      )}
      {uploadedFile && (
        <div className={styles.previewContainer}>
          {isVideo ? (
            <video
              className={styles.videoPreview}
              src={uploadedFile}
              controls
              width={500}
              height={200}
            />
          ) : (
            <Image
              className={styles.imagePreview}
              src={uploadedFile}
              alt="uploadedFile"
              width={500}
              height={200}
            />
          )}
          <button className={styles.changeBtn} onClick={handleButtonClick}>
            Change Logo
          </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        className={styles.fileInput}
        onChange={handleFileChange}
        accept="image/*, video/*"
        style={{ display: "none" }}
      />

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;
