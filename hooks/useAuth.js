import { useCookies } from "react-cookie";
import { useAsync } from "./useAsync";
import { useRouter } from "next/router";
import { axios } from "../config/config";

export const useAuth = () => {
  const [, setCookie, removeCookie] = useCookies([`token`]);
  const router = useRouter();

  const setToken = token => {
    setCookie("token", token, { path: "/" });
  };

  const login = useAsync(async (email, password) => {
    const res = await axios({
      url: "/auth/login",
      method: "POST",
      data: { email, password }
    });

    setToken(res.data.data.token);
    router.push("/");

    return res.data;
  });

  const logout = () => {
    removeCookie("token", { path: "/" });
    router.push("/");
  };

  const signup = useAsync(async ({ firstName, lastName, password, email }) => {
    const res = await axios({
      url: "/auth/register",
      method: "POST",
      data: { firstName, lastName, password, email }
    });

    return res.data;
  });

  const resendEmailVerification = useAsync(async email => {
    const res = await axios({
      url: "/auth/request-email-verification",
      method: "POST",
      params: { email }
    });

    return res.data;
  });

  const verifyEmail = useAsync(async (userId, verifyToken) => {
    const res = await axios({
      url: "/auth/verify-email",
      method: "POST",
      data: { userId, verifyToken, login: true }
    });

    const loginToken = res.data.data.loginToken;

    setToken(loginToken);
    router.push("/app/complete");
    // TODO: router redirect should be dynamic, for reset password also

    return res.data;
  });

  const PasswordEmailVerification = useAsync(async email => {
    const res = await axios({
      url: "/auth/request-password-reset",
      method: "POST",
      params: { email }
    });

    return res.data;
  });

  const ResetPassword = useAsync(async data => {
    const res = await axios({
      url: "/auth/reset-password",
      method: "POST",
      data: { data }
    });

    return res.data;
  });

  return {
    login,
    logout,
    signup,
    verifyEmail,
    setToken,
    resendEmailVerification,
    PasswordEmailVerification,
    ResetPassword
  };
};
