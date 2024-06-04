import React, { useState } from "react";
import styles from "./MultipleSelect.module.scss";

const MultipleSelect: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([{ text: "", checked: false }]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...answers];
    newOptions[index].text = value;
    setAnswers(newOptions);
  };

  const handleCheckboxChange = (index: number) => {
    const newOptions = [...answers];
    newOptions[index].checked = !newOptions[index].checked;
    setAnswers(newOptions);
  };

  const addOption = () => {
    setAnswers([...answers, { text: "", checked: false }]);
  };

  return (
    <div className={styles.multipleSelect}>
      <input
        className={styles.question}
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Question"
      />
      <div className={styles.answerBox}>
        {answers.map((option, index) => (
          <div key={index} className={styles.answerOption}>
            <input
              className={styles.answerSelect}
              type="checkbox"
              id={`option-${index}`}
              checked={option.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <label
              htmlFor={`option-${index}`}
              className={styles.customCheckbox}
            ></label>
            <input
              className={styles.answerText}
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addOption}>
       + Add Option
      </button>
    </div>
  );
};

export default MultipleSelect;
