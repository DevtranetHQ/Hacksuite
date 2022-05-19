import { IProject, ProjectId } from "./project.model";
import { projectService } from "./project.service";
import { CustomResponse } from "./../../utils/customResponse";
import { RequestWithUser } from "../../middlewares/auth.middleware";

class ProjectController {
  async draftProject(req: RequestWithUser) {
    const projectData: Partial<IProject> = req.body;
    const project = await projectService.draftProject(projectData);

    return new CustomResponse<IProject>(201, `created project draft`, project);
  }

  async publishProject(req: RequestWithUser) {
    const projectId = req.query.uniqueId as ProjectId;
    const userId = req.$user.uniqueId;
    const project = await projectService.publishProject(projectId, userId);

    return new CustomResponse<IProject>(200, `published project`, project);
  }

  async unpublishProject(req: RequestWithUser) {
    const projectId = req.query.uniqueId as ProjectId;
    const userId = req.$user.uniqueId;
    const project = await projectService.unpublishProject(projectId, userId);

    return new CustomResponse<IProject>(200, `unpublished project`, project);
  }
}

export const ProjectCtrl = new ProjectController();
