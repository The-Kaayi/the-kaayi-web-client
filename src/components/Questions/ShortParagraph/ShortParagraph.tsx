import { useState } from "react";
import styles from "./ShortParagraph.module.scss";

const ShortParagraph: React.FC = () => {
  const [question, setQuestion] = useState("");

  const questionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
    console.log(question);
  };

  return (
    <div className={styles.shortParagraph}>
      <input
        className={styles.question}
        type="text"
        placeholder="Question"
        value={question}
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
