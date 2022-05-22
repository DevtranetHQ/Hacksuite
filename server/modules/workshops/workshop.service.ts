import { Category } from "./category.model";
import { Workshop, WorkshopId } from "./workshop.model";

class WorkshopService {
  async getCategories() {
    const categories = await Category.find();
    return categories.map(category => JSON.parse(JSON.stringify(category)));
  }

  async getWorkshops() {
    const workshops = await Workshop.find({}, `-content`);
    return workshops.map(workshop => JSON.parse(JSON.stringify(workshop)));
  }

  async getWorkshop(uniqueId: WorkshopId) {
    const workshop = await Workshop.findOne({ uniqueId });
    return JSON.parse(JSON.stringify(workshop));
  }
}

export const workshopService = new WorkshopService();
