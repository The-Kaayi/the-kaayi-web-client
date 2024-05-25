"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthTypes } from "@/types/auth";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import authActionsData from "@/data/authActionsData";
import AppDetails from "@/components/AuthComponents/AppDetails/AppDetails";
import styles from "./AuthLayout.module.scss";

const AuthLayout: React.FC<{ authAction: AuthTypes }> = ({ authAction }) => {
  const { authTitle, formFields, submitButtonLabel } =
    authActionsData[authAction];
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      console.log(
        "Email:",
        formData["email"],
        "Password:",
        formData["password"]
      );
      const res = await createUserWithEmailAndPassword(
        formData["email"],
        formData["password"]
      );
      console.log("Signup Response:", res);
      if (res) {
        const userData = { ...formData };
        delete userData["password"];
        delete userData["confirmPassword"];

        await addDoc(collection(db, "users"), userData);

        router.push("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleLogin = async () => {
    console.log("Email:", formData["email"], "Password:", formData["password"]);
    const res = await signInWithEmailAndPassword(
      formData["email"],
      formData["password"]
    );
    console.log("Login Response:", res);
    if (res) {
      router.push("/admin-panel");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (authAction) {
      case "signup":
        await handleSignup();
        break;
      case "login":
        await handleLogin();
        break;
      default:
        console.error("Unsupported authAction:", authAction);
        return;
    }
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
                    Terms of Service{" "}
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
