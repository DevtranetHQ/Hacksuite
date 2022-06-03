import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";
import { UseAsync, useAsync } from "../hooks/useAsync";
import { axios } from "../config/config";
import { IProfile } from "../server/modules/social/profile.model";

interface SignupDTO {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  notify: boolean;
}
interface ResetDTO {
  userId: string;
  resetToken: string;
  password: string;
  confirmPassword: string;
}
interface IToken {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  isCompleted: boolean;
}

interface IAuthContext {
  user: IToken | null;
  login: UseAsync<[email: string, password: string], void, AxiosError>;
  signup: UseAsync<[SignupDTO], void, AxiosError>;
  resendEmailVerification: UseAsync<[email: string], void, AxiosError>;
  verifyEmail: UseAsync<[userId: string, verifyToken: string], void, AxiosError>;
  passwordEmailVerification: UseAsync<[email: string, dob: string], void, AxiosError>;
  resetPassword: UseAsync<[ResetDTO], void, AxiosError>;
  completeProfile: UseAsync<[profile: Partial<IProfile>], void, AxiosError>;

  loginWithToken: (token: string) => void;
  logout: () => void;
}

const authContext = createContext<IAuthContext>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<IToken>(null);
  const [cookies, setCookie, removeCookie] = useCookies([`token`]);
  const router = useRouter();

  const token: string = cookies[`token`];

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode<IToken>(token);
      setUser(decoded);
    }
  }, [token]);

  const setToken = (token: string) => {
    setCookie("token", token, { path: "/" });
  };

  const value: IAuthContext = {
    user,

    login: useAsync(async (email: string, password: string) => {
      const res = await axios({
        url: "/auth/login",
        method: "POST",
        data: { email, password }
      });

      setToken(res.data.data.token);
      router.push("/");

      return res.data;
    }),

    signup: useAsync(async (data: SignupDTO) => {
      // @ts-expect-error grecaptcha will be available in localhost
      if (window.location.hostname !== "localhost" && grecaptcha.getResponse() === "") {
        throw new Error("Please verify that you are not a robot");
      }

      const res = await axios({
        url: "/auth/register",
        method: "POST",
        data
      });

      return res.data;
    }),
    verifyEmail: useAsync(async (userId, verifyToken) => {
      const res = await axios({
        url: "/auth/verify-email",
        method: "POST",
        data: { userId, verifyToken, login: true }
      });

      const loginToken = res.data.data.loginToken;

      setToken(loginToken);
      router.push("/app/complete?verified=true");
      // TODO: router redirect should be dynamic, for reset password also

      return res.data;
    }),

    resendEmailVerification: useAsync(async email => {
      const res = await axios({
        url: "/auth/request-email-verification",
        method: "POST",
        params: { email }
      });

      return res.data;
    }),

    passwordEmailVerification: useAsync(async (email, dob) => {
      const res = await axios({
        url: "/auth/request-password-reset",
        method: "POST",
        data: { email, dob }
      });

      return res.data;
    }),

    resetPassword: useAsync(async data => {
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const res = await axios({
        url: "/auth/reset-password",
        method: "POST",
        data
      });

      router.push("/login?reset=true");

      return res.data;
    }),

    completeProfile: useAsync(async data => {
      const res = await axios({
        url: `/users/complete`,
        method: "POST",
        data
      });

      const newToken = res.data.data.newToken;

      setToken(newToken);

      router.push("/app/optional-profile");
    }),

    loginWithToken: token => {
      setToken(token);
      router.push("/app");
    },

    logout: () => {
      removeCookie("token", { path: "/" });
      router.push("/");
    }
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export const useProtectedRoute = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.user) {
      router.push("/login?redirect=" + router.pathname);
    }
  }, [auth.user, router]);
};
