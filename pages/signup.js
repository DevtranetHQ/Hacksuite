// TODO: display message when user already exists and handle errors (pass states to signup?)
import { useState } from "react";
import VerificationSent from "../components/signup/VerificationSent";
import SignupPage from "../components/signup/SignupPage";
import { useAuth } from "../components/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");

  function handleSubmission(e) {
    e.preventDefault();

    if (window.location.hostname !== "localhost" && grecaptcha.getResponse() === "") {
      alert("Please click <I'm not a robot> before sending the job");
      return false;
    }

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    signup.execute({ firstName: firstName, lastName, password, email });

    setEmail(email);
  }

  if (signup.status !== "success") {
    return (
      <SignupPage handleSubmission={handleSubmission} isLoading={signup.status === "pending"} />
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
