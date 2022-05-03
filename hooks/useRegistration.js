import { useAsync } from "./useAsync";
import { axios } from "../config/config";

export const useRegistration = () => {
  const register = useAsync(async (uniqueId, name, email) => {
    const res = await axios({
      url: `/register/${uniqueId}`,
      method: "POST",
      data: { name, email }
    });

    return res.data.data;
  });

  return { register };
};
