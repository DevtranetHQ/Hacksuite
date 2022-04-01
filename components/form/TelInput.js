import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils.js";
import "intl-tel-input/build/css/intlTelInput.css";
import { useEffect } from "react";

export default function TelInput() {
    // TODO: Validate phone number
    let iti;
    useEffect(() => {
        iti = intlTelInput(document.querySelector("#phoneNumber"), {
            customContainer: "!block"
        });
    }, []);

    return (
        <>
            <style jsx global>{`
                .iti {
                    margin-bottom: 1rem !important;
                }
            `}</style>
            <input
                autoComplete="off"
                className="form-input"
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter number"
            />
        </>
    );
}
