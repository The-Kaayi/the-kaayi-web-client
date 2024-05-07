"use client";
import { AuthTypes } from "@/types/auth";
import { useRouter } from "next/navigation";
import { Form } from "antd";
import { Rule } from "antd/lib/form";
import CustomButton from "@/components/Custom/CustomButton.tsx/CustomButton";
import CustomInput from "@/components/Custom/CustomInput/CustomInput";
import styles from "./AuthLayout.module.scss";
import Link from "next/link";

interface InputField {
  type: string;
  name: string;
  rules: Rule[];
  placeholder?: string;
}

interface AuthActionData {
  buttonLabel: string;
  authTitle: string;
  redirectText: string;
  redirectTo: string;
  extraText?: string;
  extraLink?: string;
  inputFields: InputField[];
}

const authActionsData: Record<AuthTypes, AuthActionData> = {
  login: {
    buttonLabel: "Login",
    authTitle: "Login to your account.",
    redirectText: "Don't have an account?",
    redirectTo: "/signup",
    extraText: "Forgot your password?",
    extraLink: "/forgot-password",
    inputFields: [
      {
        type: "input",
        name: "username",
        rules: [{ required: true, message: "Please enter your username" }],
        placeholder: "Username",
      },
      {
        type: "input",
        name: "password",
        rules: [{ required: true, message: "Please enter your password" }],
        placeholder: "Password",
      },
    ],
  },
  signup: {
    buttonLabel: "Sign Up",
    authTitle: "Create a new account.",
    redirectText: "Already have an account?",
    redirectTo: "/login",
    inputFields: [
      {
        type: "input",
        name: "firstName",
        rules: [{ required: true, message: "Please enter your first name" }],
        placeholder: "First Name",
      },
      {
        type: "input",
        name: "lastName",
        rules: [{ required: true, message: "Please enter your last name" }],
        placeholder: "Last Name",
      },
      {
        type: "input",
        name: "email",
        rules: [{ required: true, message: "Please enter your email" }],
        placeholder: "Email",
      },
      {
        type: "input",
        name: "password",
        rules: [{ required: true, message: "Please enter your password" }],
        placeholder: "Password",
      },
      {
        type: "input",
        name: "confirmPassword",
        rules: [{ required: true, message: "Please confirm your password" }],
        placeholder: "Confirm Password",
      },
    ],
  },
  "forgot-password": {
    buttonLabel: "Forgot Password",
    authTitle: "Forgot your password? Reset it here.",
    redirectText: "Remember your password?",
    redirectTo: "/login",
    inputFields: [
      {
        type: "input",
        name: "email",
        rules: [{ required: true, message: "Please enter your email" }],
        placeholder: "Email",
      },
    ],
  },
  "reset-password": {
    buttonLabel: "Reset Password",
    authTitle: "Reset your password.",
    redirectText: "Remember your password?",
    redirectTo: "/login",
    inputFields: [
      {
        type: "input",
        name: "newPassword",
        rules: [{ required: true, message: "Please enter your new password" }],
        placeholder: "New Password",
      },
      {
        type: "input",
        name: "confirmNewPassword",
        rules: [
          { required: true, message: "Please confirm your new password" },
        ],
        placeholder: "Confirm New Password",
      },
    ],
  },
};

const AuthLayout: React.FC<{ authAction: AuthTypes }> = ({ authAction }) => {
  const { buttonLabel, authTitle, inputFields } =
    authActionsData[authAction] || authActionsData["login"];

  const router = useRouter();

  const [form] = Form.useForm();

  const handleButtonClick = () => {
    form
      .validateFields()
      .then(() => {
        router.push("/");
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <div className={styles.authLayout}>
      <div className={styles.appDetails}>APP DETAILS</div>
      <div className={styles.authContainer}>
        <div className={styles.authContent}>
          <p className={styles.authTitle}>{authTitle}</p>
          <div className={styles.redirectContainer}>
            <p className={styles.redirectText}>
              {authActionsData[authAction].redirectText}
            </p>
            <Link
              className={styles.redirectLink}
              href={authActionsData[authAction].redirectTo}
            >
              {authActionsData[authAction].redirectTo
                .replace("/", "")
                .charAt(0)
                .toUpperCase() +
                authActionsData[authAction].redirectTo
                  .replace("/", "")
                  .slice(1)}
            </Link>
          </div>
          <Form
            className={styles.authForm}
            form={form}
            onFinish={handleButtonClick}
          >
            {inputFields.map((field) => (
              <CustomInput
                key={field.name}
                type={field.type}
                name={field.name}
                rules={field.rules}
                placeholder={field.placeholder}
              />
            ))}
            <Form.Item>
              <CustomButton
                label={buttonLabel}
                buttonType="primary"
                htmlType="submit"
                onClick={handleButtonClick}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
