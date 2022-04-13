// TODO: display message when user already exists and handle errors (pass states to signup?)
import EmailVerficationSent from "../components/signup/EmailVerficationSent";
import SignupPage from "../components/signup/SignupPage";
import { useAuth } from "../hooks/useAuth";

export default function Signup() {
    const { signup } = useAuth();

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

        signup.execute({ firstName, lastName, password, email });
    }

    if (signup.status !== "success") {
        return (
            <SignupPage
                handleSubmission={handleSubmission}
                isLoading={signup.status === "pending"}
            />
        );
    } else {
        return <EmailVerficationSent />;
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
