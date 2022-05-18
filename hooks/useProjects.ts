import { useAsync } from "./useAsync";
import { axios } from "../config/config";
import { IProject } from "../server/modules/projects/project.model";
import { LikeBody } from "./../pages/api/projects/like";
import { ILike } from "../server/modules/projects/interaction/like.model";
import { CommentBody } from "../pages/api/projects/comment";
import { IComment } from "../server/modules/projects/interaction/comment.model";

export const useProjects = () => {
  const draftProject = useAsync(async (projectData: Partial<IProject>) => {
    const project = await axios.post<{ data: IProject }>("/projects/draft", projectData);
    return project.data.data;
  });

  const publishProject = useAsync(async (uniqueId: string) => {
    const project = await axios.put<{ data: IProject }>(
      `/projects/publish`,
      {},
      { params: { uniqueId } }
    );
    return project.data.data;
  });

  const unpublishProject = useAsync(async (uniqueId: string) => {
    const project = await axios.put<{ data: IProject }>(
      `/projects/unpublish`,
      {},
      { params: { uniqueId } }
    );
    return project.data.data;
  });

  const toggleLike = useAsync(async (dto: LikeBody) => {
    const res = await axios.put<{ data: ILike }>(`/projects/like`, dto);
    return res.data.data;
  });

  const comment = useAsync(async (dto: CommentBody) => {
    const res = await axios.post<{ data: IComment }>(`/projects/comment`, dto);
    return res.data.data;
  });

  return { draftProject, publishProject, unpublishProject, toggleLike, comment };
};
