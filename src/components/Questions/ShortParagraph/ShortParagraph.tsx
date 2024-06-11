import React from "react";
import styles from "./ShortParagraph.module.scss";

type ShortParagraphProps = {
  question: {
    id: number;
    question: string;
  };
  onQuestionChange: (value: string, id: number) => void;
};

const ShortParagraph: React.FC<ShortParagraphProps> = ({
  question,
  onQuestionChange,
}) => {
  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(e.target.value, question.id);
  };

  return (
    <div className={styles.shortParagraph}>
      <input
        className={styles.question}
        type="text"
        placeholder="Question"
        value={question.question}
        onChange={questionChange}
      />
      <div className={styles.answerBox}>
        <input
          className={styles.answer}
          type="text"
          placeholder="Short Paragraph"
          readOnly
        />
      </div>
    </div>
  );
};

export default ShortParagraph;
