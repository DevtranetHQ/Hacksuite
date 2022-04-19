import response from "./../utils/response";
import UserService from "./../services/user.service";

class UserContoller {
    async create(req, res) {
        const result = await UserService.create(req.body);
        res.status(200).send(response("User created", result));
    }

    async getAll(req, res) {
        const result = await UserService.getAll();
        res.status(200).send(response("all users", result));
    }

    async getOne(req, res) {
        const result = await UserService.getOne(req.params.userId);
        res.status(200).send(response("user data", result));
    }

    async registerForEvent(req, res){
        const result = await UserService.registerForEvent(req.$user._id, req.params.eventId);
        res.status(200).send(response("user registered for event", result));
    }

    async update(req, res) {
        const result = await UserService.update(req.params.userId, req.body);
        res.status(200).send(response("user updated", result));
    }

    async delete(req, res) {
        const result = await UserService.delete(req.params.userId);
        res.status(200).send(response("user deleted", result));
    }
}

const UserCtrl = new UserContoller();

export { UserCtrl };
