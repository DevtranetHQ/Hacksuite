import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";
import Landing from "./landing";

export default function Index() {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.user) {
      router.push("/app");
    } else {
      setLoading(false);
    }
  }, [auth.user, router]);

  if (loading) return <LoadingPage />;
  else return <Landing />;
}
