"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthTypes } from "@/types/auth";
import Cookies from "js-cookie";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import authActionsData from "@/data/authActionsData";
import Notification from "@/components/Notification/Notification";
import AppDetails from "@/components/AuthComponents/AppDetails/AppDetails";
import styles from "./AuthLayout.module.scss";

const AuthLayout: React.FC<{ authAction: AuthTypes }> = ({ authAction }) => {
  const { authTitle, formFields, submitButtonLabel } =
    authActionsData[authAction];
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    formFields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    try {
      if (formData["password"] !== formData["confirmPassword"]) {
        Notification({
          type: "error",
          title: "Passwords do not match",
          description: "Please ensure that both password fields match.",
        });
        return;
      }

      const res = await createUserWithEmailAndPassword(
        formData["email"],
        formData["password"]
      );
      if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
        Notification({
          type: "error",
          title: "Email already in use",
          description: "Please use a different email address.",
        });
      } else if (res) {
        const userData = {
          userID: res.user.uid,
          firstName: formData["firstName"],
          lastName: formData["lastName"],
          email: formData["email"],
        };

        await addDoc(collection(db, "users"), userData);

        router.push("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleLogin = async () => {
    const res = await signInWithEmailAndPassword(
      formData["email"],
      formData["password"]
    );

    if (res) {
      Cookies.set("loggedIn", "true");
      console.log(res);
      router.push("/admin-panel");
    } else {
      Cookies.set("loggedIn", "false");
      Notification({
        type: "error",
        title: "Invalid email or password",
        description: "Please check your email and password and try again.",
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFields()) return;

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
                  onChange={handleChange}
                  placeholder={field.label}
                />
                {errors[field.name] && (
                  <p className={styles.errorText}>{errors[field.name]}</p>
                )}
              </div>
            ))}

            {/* {authAction === "signup" && (
              <div className={styles.termsCheckboxContainer}>
                <input
                  className={styles.termsCheckbox}
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
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
            )} */}

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
