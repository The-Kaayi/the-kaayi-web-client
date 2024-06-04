"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FileUpload from "@/components/FileUpload/FileUpload";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import ShortParagraph from "@/components/Questions/ShortParagraph/ShortParagraph";
import LongParagraph from "@/components/Questions/LongParagraph/LongParagraph";
import MultipleChoice from "@/components/Questions/MultilpleChoice/MultipleChoice";
import MultipleSelect from "@/components/Questions/MultipleSelect/MultipleSelect";
import deleteIcon from "../../../../../../public/images/Missions/delete.svg";
import arrowIcon from "../../../../../../public/images/Missions/arrow-right.svg";
import styles from "./page.module.scss";

const CreateMission: React.FC = () => {
  const [questions, setQuestions] = useState([{ id: 1, type: "short" }]);

  const handleSelectChange = (value: string, id: number) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, type: value } : q))
    );
  };

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      type: "short",
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const questionOptions = [
    { value: "short", label: "Short Paragraph" },
    { value: "long", label: "Long Paragraph" },
    { value: "MCQ", label: "Multiple Choice" },
    { value: "MSQ", label: "Multiple Select" },
  ];

  const renderQuestionType = (type: string) => {
    if (type === "short") {
      return <ShortParagraph />;
    } else if (type === "long") {
      return <LongParagraph />;
    } else if (type === "MCQ") {
      return <MultipleChoice />;
    } else if (type === "MSQ") {
      return <MultipleSelect />;
    }
  };

  return (
    <div className={styles.createMission}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Create a new mission</h2>
        <Link className={styles.backBtn} href="/admin-panel/missions">
          <Image className={styles.backIcon} src={arrowIcon} alt="Arrow Icon" />
          Go Back
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.shopDetails}>
          <h3 className={styles.title}>Shop Details</h3>
          <div className={styles.details}>
            <div className={styles.subContainer}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder=" Enter the shop name"
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter the shop location"
              />
            </div>
            <div className={styles.subContainer}>
              <div className={styles.label}>Logo</div>
              <FileUpload maxFileSize={1} />
            </div>
          </div>
        </div>

        <div className={styles.missionDetails}>
          <h3 className={styles.title}>Mission Details</h3>
          <div className={styles.details}>
            <div className={styles.subContainer}>
              <label className={styles.label}>Title</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter the mission title"
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter the mission description"
              />
            </div>
          </div>
        </div>

        <div className={styles.questionare}>
          {questions.map((question: any, index: number) => (
            <div key={question.id} className={styles.question}>
              <CustomSelect
                options={questionOptions}
                defaultValue={question.type}
                onChange={(value) => handleSelectChange(value, question.id)}
              />
              {renderQuestionType(question.type)}
              <Image
                className={styles.deleteIcon}
                onClick={() => removeQuestion(question.id)}
                src={deleteIcon}
                alt="Delete Icon"
              />
            </div>
          ))}
          <button className={styles.addBtn} onClick={addQuestion}>
            + Add Question
          </button>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.postBtn}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMission;
