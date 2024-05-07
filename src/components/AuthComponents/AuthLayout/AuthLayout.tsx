import { AuthTypes } from "@/types/auth";
import { Form } from "antd";
import { Rule } from "antd/lib/form";
import CustomButton from "@/components/Custom/CustomButton.tsx/CustomButton";
import CustomInput from "@/components/Custom/CustomInput/CustomInput";
import styles from "./AuthLayout.module.scss";

interface InputField {
  type: string;
  name: string;
  rules: Rule[];
  placeholder?: string;
}

interface AuthActionData {
  buttonLabel: string;
  authDescription: string;
  inputFields: InputField[];
}

const authActionsData: Record<AuthTypes, AuthActionData> = {
  login: {
    buttonLabel: "Login",
    authDescription: "Login to your account.",
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
    authDescription: "Create a new account.",
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
    authDescription: "Forgot your password? Reset it here.",
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
    authDescription: "Reset your password.",
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
  const { buttonLabel, authDescription, inputFields } =
    authActionsData[authAction] || authActionsData["login"];

  const [form] = Form.useForm();

  const handleButtonClick = () => {
    form
      .validateFields()
      .then(() => {
        // Need to perform future auth logic here.
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <div className={styles.authLayout}>
      <div className={styles.appDetails}>APP DETAILS</div>
      <div className={styles.authContainer}>
        <div className={styles.authContent}>{authAction}</div>
        <p className={styles.authDescription}>{authDescription}</p>
        <Form form={form} onFinish={handleButtonClick}>
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
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthLayout;
