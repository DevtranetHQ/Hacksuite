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
    });

    const logout = () => {
        removeCookie("token", { path: "/" });
        router.push("/");
    };

    const signup = useAsync(async ({ firstName, lastName, password, email }) => {
        return await axios({
            url: "/auth/register",
            method: "POST",
            data: { firstName, lastName, password, email }
        });
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
    });

    return { login, logout, signup, verifyEmail, setToken };
};
