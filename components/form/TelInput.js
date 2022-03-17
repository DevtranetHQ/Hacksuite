import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils.js";
import { useEffect } from "react";

export default function TelInput(onChange) {
    useEffect(() => {
        intlTelInput(document.querySelector("#phoneNumber"), {
            customContainer: "!block"
        });
    }, []);

    return (
        <input
            autoComplete="off"
            className="form-input"
            id="phoneNumber"
            onChange={onChange}
            type="tel"
        />
    );
}
