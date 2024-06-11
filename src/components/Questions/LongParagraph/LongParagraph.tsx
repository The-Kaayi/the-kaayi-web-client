import { useState } from "react";
import styles from "./LongParagraph.module.scss";

type LongParagraphProps = {
  question: {
    id: number;
    question: string;
  };
  onQuestionChange: (value: string, id: number) => void;
};

const LongParagraph: React.FC<LongParagraphProps> = ({
  question,
  onQuestionChange,
}) => {

  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(e.target.value, question.id);
  };

  return (
    <div className={styles.longParagraph}>
      <input
        className={styles.question}
        type="text"
        placeholder="Question"
        onChange={questionChange}
        value={question.question}
      />
      <div className={styles.answerBox}>
        <textarea
          className={styles.answer}
          placeholder="Long Paragraph"
          readOnly
          rows={5}
        />
      </div>
    </div>
  );
};

export default LongParagraph;
