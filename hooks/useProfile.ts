import { AxiosError } from "axios";
import { axios } from "../config/config";
import { IProfile } from "../server/modules/social/profile.model";
import { UseAsync, useAsync } from "./useAsync";

type UpdateProfile = UseAsync<
  [profile: Partial<IProfile>, files?: { image?: File; resume?: File }],
  void,
  AxiosError
>;

export const useProfile = () => {
  const updateProfile: UpdateProfile = useAsync(async (data, files) => {
    const updateJob = axios({
      url: `/profiles`,
      method: "PUT",
      data
    });

    if (files) {
      const { image, resume } = files;

      if (image || resume) {
        const formData = new FormData();
        if (image) {
          formData.append("image", image);
        }
        if (resume) {
          formData.append("resume", resume);
        }

        const uploadJob = axios({
          url: `/profiles/upload`,
          method: "PUT",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" }
        });

        await Promise.all([updateJob, uploadJob]);
      }
    }

    await updateJob;
  });

  return { updateProfile };
};
