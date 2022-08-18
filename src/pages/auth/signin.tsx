import { signIn as signIntoProvider } from "next-auth/react";

const SignIn = () => {
  return (
    <div key="google">
      <button onClick={() => signIntoProvider("google")}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
