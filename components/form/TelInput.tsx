import { useEffect, FC } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils.js";
import "intl-tel-input/build/css/intlTelInput.css";
import styles from "./TelInput.module.css";

const TelInput: FC<JSX.IntrinsicElements["input"]> = (props) => {
  // TODO: Validate phone number
  useEffect(() => {
    intlTelInput(document.querySelector("#phoneNumber"), { customContainer: "!block" });
  }, []);

  return (
    <div className={styles.telinput}>
      <style jsx global>{`
        .iti {
          margin-bottom: 1rem !important;
          display: flex;
          align-items: center
        }
        .iti__arrow{
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 8px solid #8A8A8A;
        }
      `}</style>
      <input
        autoComplete="off"
        className="form-input"
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        placeholder="Enter number"
        {...props}
      />
    </div>
  );
}

export default TelInput;
