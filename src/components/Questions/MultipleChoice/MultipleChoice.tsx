import React from "react";
import styles from "./MultipleChoice.module.scss";

interface MultipleChoiceProps {
  question: string;
  answers: any;
  selectedAnswer: number | null;
  onQuestionChange: (question: string) => void;
  onAnswerChange: (index: number, value: string) => void;
  onAnswerSelect: (index: number) => void;
  addAnswer: () => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  answers,
  onQuestionChange,
  onAnswerChange,
  addAnswer,
}) => {
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(e.target.value);
  };

  const handleAnswerChange = (index: number, text: string) => {
    onAnswerChange(index, { text, checked: answers[index].checked });
  };

  return (
    <div className={styles.multipleChoice}>
      <input
        className={styles.question}
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Question"
      />
      <div className={styles.answerBox}>
        {answers.map((answer, index) => (
          <div key={index} className={styles.answerOption}>
            <input
              className={styles.answerSelect}
              type="radio"
              name="multipleChoice"
              id={`option-${index}`}
              checked={answer.checked}
              onChange={() =>
                onAnswerChange(index, { text: answer.text, checked: true })
              }
            />
            <label
              htmlFor={`option-${index}`}
              className={styles.customCheckbox}
            ></label>
            <input
              className={styles.answerText}
              type="text"
              value={answer.text}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addAnswer}>
        + Add Option
      </button>
    </div>
  );
};

export default MultipleChoice;
