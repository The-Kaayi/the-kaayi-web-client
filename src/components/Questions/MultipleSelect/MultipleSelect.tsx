import { useState, useEffect } from "react";
import styles from "./MultipleSelect.module.scss";

type Option = {
  id: number;
  value: string;
};

type MultipleSelectProps = {
  question: {
    id: number;
    question: string;
    options: Option[];
  };
  onQuestionChange: (value: string, id: number) => void;
  onOptionsChange: (options: Option[], id: number) => void;
};

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  question,
  onQuestionChange,
  onOptionsChange,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (question.options.length === 0) {
      onOptionsChange([{ id: 1, value: "" }], question.id);
    }
  }, [onOptionsChange, question.id, question.options.length]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(e.target.value, question.id);
  };

  const handleAnswerChange = (id: number, value: string) => {
    const newAnswers = question.options.map((option) =>
      option.id === id ? { id, value } : option
    );
    onOptionsChange(newAnswers, question.id);
  };

  const handleAnswerSelect = (id: number) => {
    const isSelected = selectedAnswers.includes(id);
    if (isSelected) {
      setSelectedAnswers(selectedAnswers.filter((answerId) => answerId !== id));
    } else {
      setSelectedAnswers([...selectedAnswers, id]);
    }
  };

  const addAnswer = () => {
    const newId = question.options.length
      ? question.options[question.options.length - 1].id + 1
      : 1;
    const newAnswers = [...question.options, { id: newId, value: "" }];
    onOptionsChange(newAnswers, question.id);
  };

  return (
    <div className={styles.multipleSelect}>
      <input
        className={styles.question}
        type="text"
        value={question.question}
        onChange={handleQuestionChange}
        placeholder="Question"
      />
      <div className={styles.answerBox}>
        {question.options.map((option) => (
          <div key={option.id} className={styles.answerOption}>
            <input
              className={styles.answerSelect}
              type="checkbox"
              id={`option-${option.id}`}
              checked={selectedAnswers.includes(option.id)}
              onChange={() => handleAnswerSelect(option.id)}
            />
            <label
              htmlFor={`option-${option.id}`}
              className={styles.customCheckbox}
            ></label>
            <input
              className={styles.answerText}
              type="text"
              value={option.value}
              onChange={(e) => handleAnswerChange(option.id, e.target.value)}
              placeholder={`Option ${option.id}`}
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

export default MultipleSelect;
