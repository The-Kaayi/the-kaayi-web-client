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

export default authActionsData;
