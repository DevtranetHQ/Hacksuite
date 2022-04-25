import { useRouter } from "next/router";
import { axios } from "../config/config";
import { useAuth } from "./useAuth";
import { useAsync } from "./useAsync";

export const useProfile = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  const completeProfile = useAsync(async (userId, data) => {
    const res = await axios({
      url: `/users/${userId}`,
      method: "PUT",
      data
    });

    const newToken = res.data.data.newToken;

    setToken(newToken);

    router.push("/app/optional-profile");
  });

  return { completeProfile };
};
