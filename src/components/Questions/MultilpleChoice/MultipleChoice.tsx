import React, { useState } from "react";
import styles from "./MultipleChoice.module.scss";

const MultipleChoice: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const addAnswer = () => {
    setAnswers([...answers, ""]);
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
              className={styles.answer}
              type="radio"
              name="multipleChoice"
              checked={selectedAnswer === index}
              onChange={() => handleAnswerSelect(index)}
            />
            <input
              className={styles.answerText}
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Answer ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className={styles.addButton} onClick={addAnswer}>
        Add Option
      </button>
    </div>
  );
};

export default MultipleChoice;
