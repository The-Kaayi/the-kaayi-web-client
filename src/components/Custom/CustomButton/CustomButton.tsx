"use client";

import { MouseEvent } from "react";
import classNames from "classnames";
import styles from "./CustomButton.module.scss";
import { Button as AntButton } from "antd";

interface CustomButtonProps {
  label: string | null;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
  buttonType?: "primary" | "delete" | "border" | "secondary" | "text";
  htmlType?: "button" | "submit" | "reset";
}

const CustomButton = ({
  onClick,
  label,
  disabled,
  buttonType = "primary",
  icon = null,
  className,
  htmlType,
}: CustomButtonProps) => (
  <AntButton
    block
    size="large"
    onClick={onClick}
    disabled={disabled}
    htmlType={htmlType}
    className={classNames(styles.root, className, {
      [styles.primary]: buttonType === "primary",
      [styles.delete]: buttonType === "delete",
      [styles.border]: buttonType === "border",
      [styles.secondary]: buttonType === "secondary",
      [styles.text]: buttonType === "text",
    })}
  >
    {icon}
    {label}
  </AntButton>
);

export default CustomButton;
