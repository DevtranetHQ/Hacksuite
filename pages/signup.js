//TODO: display message when user already exists and handle errors (pass states to signup?)
import EmailVerficationSent from "../components/signup/EmailVerficationSent";
import SignupPage from "../components/signup/SignupPage";
import { axios } from "../config/config";
import { useState } from "react";

export default function Signup() {
    //states
    const [isLoading, setIsLoading] = useState(false);
    const [sentEmail, setSentEmail] = useState(false);

    //constant values for the request
    const method = "POST";

    async function handleSubmission(e) {
        e.preventDefault();

        if (window.location.hostname !== "localhost" && grecaptcha.getResponse() === '') {
            alert("Please click <I'm not a robot> before sending the job");
            return false;
        }

        setIsLoading(true);

        const endpoint = "/auth/register";
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const password = e.target.password.value;
        const email = e.target.email.value;

        try {
            const response = await axios({
                url: endpoint,
                method: method,
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    email: email
                }
            });
            console.log(response.data);
            setSentEmail(true);
            setIsLoading(false);
        } catch (e) {
            console.log(e.response.data ? e.response.data.message : e.message);
            setIsLoading(false);
        }
    }

    if (!sentEmail) {
        return (
            <SignupPage
                handleSubmission={handleSubmission}
                isLoading={isLoading}
                method={method}
            />
        );
    } else {
        return <EmailVerficationSent />;
    }
}
