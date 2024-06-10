"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FileUpload from "@/components/FileUpload/FileUpload";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import ShortParagraph from "@/components/Questions/ShortParagraph/ShortParagraph";
import LongParagraph from "@/components/Questions/LongParagraph/LongParagraph";
import MultipleChoice from "@/components/Questions/MultipleChoice/MultipleChoice";
import MultipleSelect from "@/components/Questions/MultipleSelect/MultipleSelect";
import deleteIcon from "../../../../../../public/images/Missions/delete.svg";
import arrowIcon from "../../../../../../public/images/Missions/arrow-right.svg";
import styles from "./page.module.scss";

type missionType = {
  shopDetails: {
    shopName: string;
    shopLocation: string;
    shopLogo: string;
  };
  missionDetails: {
    missionName: string;
    missionDescription: string;
    missionLogo: string;
  };
  questions: {
    id: number;
    type: string;
    question: string;
    answer?: string;
    options?: string[];
  }[];
};

const CreateMission: React.FC = () => {
  const [questions, setQuestions] = useState([{ id: 1, type: "short" }]);
  const [questionData, setQuestionData] = useState<missionType[]>([]);
  const [missionData, setMissionData] = useState<missionType>({
    shopDetails: {
      shopName: "",
      shopLocation: "",
      shopLogo: "",
    },
    missionDetails: {
      missionName: "",
      missionDescription: "",
      missionLogo: "",
    },
    questions: [],
  });

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

  const handleSave = () => {
    console.log("test", questions);

    const newMission = {
      shopDetails: {
        shopName: "",
        shopLocation: "",
        shopLogo: "",
      },
      missionDetails: {
        missionName: "",
        missionDescription: "",
        missionLogo: "",
      },
      questions: [],
    };

    setMissionData(newMission);

    console.log("test 1", missionData);
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
                value={missionData.shopDetails?.shopName}
                onChange={(e) => {
                  setMissionData({
                    ...missionData,
                    shopDetails: {
                      ...missionData.shopDetails,
                      shopName: e.target.value,
                    },
                  });
                }}
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter the shop location"
                value={missionData.shopDetails?.shopLocation}
                onChange={(e) => {
                  setMissionData({
                    ...missionData,
                    shopDetails: {
                      ...missionData.shopDetails,
                      shopLocation: e.target.value,
                    },
                  });
                }}
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
                value={missionData.missionDetails?.missionName}
                onChange={(e) => {
                  setMissionData({
                    ...missionData,
                    missionDetails: {
                      ...missionData.missionDetails,
                      missionName: e.target.value,
                    },
                  });
                }}
              />
            </div>

            <div className={styles.subContainer}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter the mission description"
                value={missionData.missionDetails?.missionDescription}
                onChange={(e) => {
                  setMissionData({
                    ...missionData,
                    missionDetails: {
                      ...missionData.missionDetails,
                      missionDescription: e.target.value,
                    },
                  });
                }}
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
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
          <button className={styles.postBtn}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateMission;
