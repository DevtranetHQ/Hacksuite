import response from "../utils/response";
import AuthService from "../services/auth.service";

class AuthContoller {
    async register(req, res) {
        console.log({ body: req.body });
        const result = await AuthService.register(req.body);
        res.status(201).send(response("new user registered successfully", result));
    }

    async login(req, res) {
        const result = await AuthService.login(req.body);
        res.status(200).send(response("user login successful", result));
    }

    async verifyEmail(req, res) {
        const result = await AuthService.verifyEmail(req.body);
        res.status(200).send(response("email verified successfully", result));
    }

    async requestEmailVerification(req, res) {
        const result = await AuthService.requestEmailVerification(req.query.email);
        res.status(200).send(response("email verfication link sent", result));
    }

    async requestPasswordReset(req, res) {
        const result = await AuthService.requestPasswordReset(req.query.email);
        res.status(200).send(response("password reset link sent", result));
    }

    async resetPassword(req, res) {
        const result = await AuthService.resetPassword(req.body);
        res.status(200).send(response("password updated", result));
    }

    async updatePassword(req, res) {
        const result = await AuthService.updatePassword(req.params.userId, req.body);
        res.status(200).send(response("password updated", result));
    }
}

const AuthCtrl = new AuthContoller();

export { AuthCtrl };
