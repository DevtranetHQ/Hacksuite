import { useAsync } from "./useAsync";
import { axios } from "../config/config";

export const useRegistration = () => {
  const register = useAsync(async (eventId, name, email) => {
    const res = await axios({
      url: `/register/${eventId}`,
      method: "POST",
      data: { name, email }
    });

    return res.data.data;
  });

  return { register };
};
