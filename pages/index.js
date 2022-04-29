import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";

export default function Index() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      router.push("/app");
    } else {
      router.push("/login");
    }
  }, [auth.user, router]);

  return <LoadingPage />;
}
