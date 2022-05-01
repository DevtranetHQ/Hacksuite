import { Project, IProject } from './project.model';

interface IQueryProjects {
  limit?: number;
  skip?: number;
  sort?: string;
  fields?: string;
}

class ProjectService {
  async draftProject(project: IProject) {
    const newProject = new Project(project);
    return newProject.save({ validateBeforeSave: false });
  }

  async getProjects(query: IQueryProjects) {
    return Project.find({}, query.fields, {
      skip: query.skip,
      limit: query.limit,
      sort: query.sort,
    })
  }

  getPublishedProjects(query: IQueryProjects) {
    return Project.find({ published: true }, query.fields, {
      skip: query.skip,
      limit: query.limit,
      sort: query.sort,
    })
  }

  async getProject(id: string) {
    return Project.findById(id);
  }

  async updateProject(id: string, project: IProject) {
    return Project.findByIdAndUpdate(id, project, { new: true });
  }

  async publishProject(id: string) {
    return Project.findByIdAndUpdate(id, { published: true });
  }

  async unpublishProject(id: string) {
    return Project.findByIdAndUpdate(id, { published: false });
  }

  async deleteProject(id: string) {
    return Project.findByIdAndDelete(id);
  }

  async getProjectsByUser(userId: string) {
    return Project.find({ user: userId, collaborators: userId });
  }
}

export const projectService = new ProjectService();