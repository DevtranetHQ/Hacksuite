import ReCAPTCHA from "react-google-recaptcha";
import { Dispatch, SetStateAction } from "react";

interface MessageFormProps {
  setShowMessage: Dispatch<SetStateAction<boolean>>;
}

const MessageForm: React.FC<MessageFormProps> = ({ setShowMessage }) => {
  return (
    <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-full mx-auto slide-bottom backdrop-blur-sm">
      <div className="relative  my-6 mx-auto p-5 w-6/12 bg-white dark:bg-dark rounded-lg">
        <form className="form bg-white dark:bg-dark">
          <div>
            <label className="form-label font-normal dark:text-white text-left">
              Enter Subject
            </label>
            <input type="text" className="form-input" />
          </div>
          <div>
            <textarea
              style={{ height: "150px", resize: "none" }}
              className="form-input"
              placeholder="Write something..."
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              className="inline-block my-3"
              sitekey="6LexReUeAAAAAF5a0KmF1tz26MWEFUwnhQ7crZAL"
              onChange={i => console.log(i)}
            />
          </div>

          <div className="flex justify-center gap-x-5 mt-5">
            <button
              className="button-big button-deep-sky-blue px-20 w-[150px] text-22px mt-3 "
              onClick={() => setShowMessage(false)}>
              Close
            </button>
            <button
              className="button-big button-orange-peel px-20 w-[150px] text-22px mt-3"
              onClick={() => {}}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MessageForm;
