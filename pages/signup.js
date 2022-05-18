import { useState, useEffect } from "react";
import VerificationSent from "../components/signup/VerificationSent";
import SignupPage from "../components/signup/SignupPage";
import { useAuth } from "../components/AuthContext";

export default function Signup() {
  const { signup, resendEmailVerification } = useAuth();
  const [email, setEmail] = useState("");

  function handleSubmission(e) {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const notify = e.target.notify.checked;

    signup.execute({ firstName, lastName, password, email, notify });

    setEmail(email);
  }

  if (signup.status !== "success") {
    return (
      <SignupPage
        handleSubmission={handleSubmission}
        signup={signup}
        isLoading={signup.status === "pending"}
      />
    );
  } else {
    return <VerificationSent email={email} />;
  }
}

export async function getServerSideProps(context) {
  if (context.req.cookies.token) {
    context.res.writeHead(302, {
      Location: `/app`
    });
    context.res.end();
  }

  return {
    props: {}
  };
}
