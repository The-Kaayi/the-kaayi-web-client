import { useState } from "react";
import styles from "./LongParagraph.module.scss";

const LongParagraph: React.FC = () => {
  const [question, setQuestion] = useState("");

  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <div className={styles.longParagraph}>
      <input
        className={styles.question}
        type="text"
        placeholder="Question"
        onChange={questionChange}
        value={question}
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
