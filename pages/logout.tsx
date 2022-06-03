import { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";

export default function Logout() {
  const { logout } = useAuth();

  useEffect(logout, [logout]);

  return (
    <>
      <LoadingPage />
    </>
  );
}
