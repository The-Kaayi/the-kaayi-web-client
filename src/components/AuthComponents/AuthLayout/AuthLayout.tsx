import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthTypes } from "@/types/auth";
import Link from "next/link";
import AppDetails from "@/components/AuthComponents/AppDetails/AppDetails";
import styles from "./AuthLayout.module.scss";

const authActionsData = {
  login: {
    authTitle: "Welcome Back",
    redirectText: "Don't have an account?",
    redirectTo: "/signup",
    formFields: [
      { name: "email", label: "Email", type: "email", required: true },
      { name: "password", label: "Password", type: "password", required: true },
    ],
    submitButtonLabel: "Login",
  },
  signup: {
    authTitle: "Create Account",
    redirectText: "Already have an account?",
    redirectTo: "/login",
    formFields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "password", label: "Password", type: "password", required: true },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        required: true,
      },
    ],
    submitButtonLabel: "Sign Up",
  },
  "forgot-password": {
    authTitle: "Forgot your password?",
    redirectText: "Remember your password?",
    redirectTo: "/login",
    formFields: [
      { name: "email", label: "Email", type: "email", required: true },
    ],
    submitButtonLabel: "Send Reset Link",
  },
  "reset-password": {
    authTitle: "Reset your password.",
    redirectText: "Remember your password?",
    redirectTo: "/login",
    formFields: [
      {
        name: "password",
        label: "New Password",
        type: "password",
        required: true,
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        required: true,
      },
    ],
    submitButtonLabel: "Reset Password",
  },
};

const AuthLayout: React.FC<{ authAction: AuthTypes }> = ({ authAction }) => {
  const { authTitle, formFields, submitButtonLabel } =
    authActionsData[authAction];
  const [formData, setFormData] = useState({});

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    router.push(authAction === "signup" ? "/login" : "/admin-panel");
    
  };

  return (
    <div className={styles.authLayout}>
      <div className={styles.appDetails}>
        <AppDetails />
      </div>

      <div className={styles.authContainer}>
        <div className={styles.authContent}>
          <p className={styles.authTitle}>{authTitle}</p>

          {authAction === "forgot-password" && (
            <p className={styles.description}>
              Enter the email address associated with your account. We will send
              you a link to reset your password.
            </p>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.name} className={styles.formField}>
                <input
                  className={styles.formInput}
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  placeholder={field.label}
                />
              </div>
            ))}

            {authAction === "signup" && (
              <div className={styles.termsCheckboxContainer}>
                <input
                  className={styles.termsCheckbox}
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  required
                />
                <label
                  className={styles.termsCheckboxLabel}
                  htmlFor="acceptTerms"
                >
                  I accept the{" "}
                  <Link href="/terms-of-service" className={styles.link}>
                    Terms of Tervice{" "}
                  </Link>
                  and{" "}
                  <Link href="/privacy-policy" className={styles.link}>
                    Privacy Policy
                  </Link>
                </label>
              </div>
            )}

            {authAction === "login" && (
              <Link
                className={styles.forgotPasswordLink}
                href="/forgot-password"
              >
                Forgot your password?
              </Link>
            )}

            <button type="submit" className={styles.submitButton}>
              {submitButtonLabel}
            </button>
          </form>

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
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
