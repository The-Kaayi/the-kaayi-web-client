const authActionsData = {
  login: {
    authTitle: "Welcome Back",
    redirectText: "Don't have an account?",
    redirectTo: "/signup",
    formFields: [
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
    submitButtonLabel: "Login",
  },
  signup: {
    authTitle: "Create Account",
    redirectText: "Already have an account?",
    redirectTo: "/login",
    formFields: [
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
      },
    ],
    submitButtonLabel: "Sign Up",
  },
  "forgot-password": {
    authTitle: "Forgot your password?",
    redirectText: "Remember your password?",
    redirectTo: "/login",
    formFields: [{ name: "email", label: "Email", type: "email" }],
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
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
      },
    ],
    submitButtonLabel: "Reset Password",
  },
};

export default authActionsData;
