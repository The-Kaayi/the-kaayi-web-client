import styles from "./LongParagraph.module.scss";

const LongParagraph: React.FC = () => {
  return (
    <div className={styles.longParagraph}>
      <input className={styles.question} type="text" placeholder="Question" />
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
