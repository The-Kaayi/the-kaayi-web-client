import React, { ChangeEvent } from "react";
import { Form, Input } from "antd";
import { Rule } from "antd/es/form";
import styles from "./CustomInput.module.scss";
import classNames from "classnames";

interface InputProps {
  type: string;
  name: string;
  rules: Rule[];
  value: string | number | readonly string[] | undefined;
  placeholder?: string;
  className?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Partial<InputProps>> = ({
  type,
  name,
  rules,
  value,
  placeholder,
  handleChange,
  className,
}) => {
  return (
    <Form.Item name={name} rules={rules}>
      {type === "input" ? (
        <Input
          className={classNames(styles.input, className)}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <Input.Password
          className={styles.input}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </Form.Item>
  );
};

export default CustomInput;