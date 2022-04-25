import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

export default function EmailVerificationRes() {
  const router = useRouter();

  const { verifyEmail } = useAuth();

  useEffect(() => {
    if (router.query.uid && router.query.verifyToken) {
      verifyEmail.execute(router.query.uid, router.query.verifyToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.uid, router.query.verifyToken]);

  return (
    <h2>
      Email Verification <br />
      {verifyEmail.status === "loading" && <>Verifying...</>}
      {verifyEmail.status === "success" && <>Email verified! Redirecting to app...</>}
      {verifyEmail.status === "error" && <>{verifyEmail.error?.response.data.message}</>}
    </h2>
  );
}
