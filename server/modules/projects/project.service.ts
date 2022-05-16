import { Project, IProject, ProjectId } from "./project.model";
import { CustomError } from "./../../utils/customError";
import { UserId } from "../auth/user.model";

interface IQueryProjects {
  limit?: number;
  skip?: number;
  sort?: string;
  fields?: string;
}

class ProjectService {
  async draftProject(project: Partial<IProject>) {
    const newProject = new Project(project);
    return newProject.save({ validateBeforeSave: false });
  }

  async getProjects(query: IQueryProjects) {
    return Project.find({}, query.fields, {
      skip: query.skip,
      limit: query.limit,
      sort: query.sort
    });
  }

  async getPublishedProjects(query: IQueryProjects) {
    const projects = await Project.find({ published: true }, query.fields, {
      skip: query.skip,
      limit: query.limit,
      sort: query.sort
    });

    return projects.map(p => JSON.parse(JSON.stringify(p)));
  }

  async getProject(uniqueId: ProjectId) {
    return Project.findOne({ uniqueId });
  }

  async updateProject(uniqueId: ProjectId, project: IProject) {
    return Project.findOneAndUpdate({ uniqueId }, project, { new: true });
  }

  async publishProject(uniqueId: ProjectId, userId: UserId) {
    const project = await Project.findOne({ uniqueId, creator: userId, published: false });
    if (!project) {
      throw new CustomError(`Project not found`, 404);
    }

    project.published = true;
    project.publishedAt = new Date();
    return project.save();
  }

  async unpublishProject(uniqueId: ProjectId, userId: UserId) {
    const project = await Project.findOne({ uniqueId, creator: userId, published: true });
    if (!project) {
      throw new CustomError(`Project not found`, 404);
    }

    project.published = false;
    return project.save();
  }

  async deleteProject(uniqueId: ProjectId, userId: UserId) {
    const project = await Project.findOne({ uniqueId, creator: userId });
    if (!project) {
      throw new CustomError(`Project not found`, 404);
    }

    return project.remove();
  }

  async getProjectsByUser(userId: UserId) {
    return Project.find({ user: userId, collaborators: userId });
  }
}

export const projectService = new ProjectService();
