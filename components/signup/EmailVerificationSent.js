// TODO: replace sentEmailImage with a high res svg and center it
import sentEmailImage from "../../public/assets/auth/verification.png";
import Image from "next/image";

export default function EmailVerificationSent() {
  return (
    <div className="w-fit">
      <Image src={sentEmailImage} alt="" />
    </div>
  );
}
