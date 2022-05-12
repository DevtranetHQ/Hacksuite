import { useAsync } from "./useAsync";
import { axios } from "../config/config";
import { IProject } from "../server/modules/projects/project.model";

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

  return { draftProject, publishProject, unpublishProject };
};
