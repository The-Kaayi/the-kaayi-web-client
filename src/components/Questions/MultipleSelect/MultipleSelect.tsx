import React, { useState } from "react";
import styles from "./MultipleSelect.module.scss";

const MultipleSelect: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ text: "", checked: false }]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (index: number) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { text: "", checked: false }]);
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
      <div className={styles.options}>
        {options.map((option, index) => (
          <div key={index} className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={`option-${index}`}
              checked={option.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <input
              className={styles.optionText}
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addOption}>
        Add Option
      </button>
    </div>
  );
};

export default MultipleSelect;
