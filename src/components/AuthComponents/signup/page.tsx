"use client";
import { useRouter } from "next/navigation";
import { Form } from "antd";
import CustomButton from "@/components/Custom/CustomButton.tsx/CustomButton";
import CustomInput from "@/components/Custom/CustomInput/CustomInput";
import Link from "next/link";
import AppDetails from "@/components/AuthComponents/AppDetails/AppDetails";
import styles from "../auth.module.scss";

interface InputField {
  type: string;
  name: string;
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

const pageData = {
  buttonLabel: "Sign Up",
  authTitle: "Create a new account.",
  redirectText: "Already have an account?",
  redirectTo: "/login",
};

const formData = [
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
];

const Signup: React.FC = () => {
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
      <div className={styles.appDetails}>
        <AppDetails />
      </div>
      <div className={styles.authContainer}>
        <div className={styles.authContent}>
          <p className={styles.authTitle}>{pageData.authTitle}</p>
          <div className={styles.redirectContainer}>
            <p className={styles.redirectText}>{pageData.redirectText}</p>
            <Link className={styles.redirectLink} href={pageData.redirectTo}>
              {pageData.redirectTo.replace("/", "").charAt(0).toUpperCase() +
                pageData.redirectTo.replace("/", "").slice(1)}
            </Link>
          </div>
          <Form
            className={styles.authForm}
            form={form}
            onFinish={handleButtonClick}
          >
            {formData.map((field) => (
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
                label={pageData.buttonLabel}
                buttonType="primary"
                htmlType="submit"
                onClick={handleButtonClick}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div>Signup</div>
    </div>
  );
};

export default Signup;
