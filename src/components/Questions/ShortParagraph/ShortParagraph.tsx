import styles from "./ShortParagraph.module.scss";

const ShortParagraph: React.FC = () => {
  return (
    <div className={styles.shortParagraph}>
      <input className={styles.question} type="text" placeholder="Question" />
      <div className={styles.answerBox}>
        <input className={styles.answer}  type="text" placeholder="Short Paragraph" readOnly />
      </div>
    </div>
  );
};

export default ShortParagraph;