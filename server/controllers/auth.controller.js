import { CustomResponse } from "../utils/customResponse";
import AuthService from "../modules/auth/auth.service";

class AuthController {
  async register(req) {
    const result = await AuthService.register(req.body);
    return new CustomResponse(201, "user registered successfully", result);
  }

  async login(req) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = await AuthService.login(req.body);
    return new CustomResponse(200, "user login successful", result);
  }

  async verifyEmail(req) {
    const result = await AuthService.verifyEmail(req.body);
    return new CustomResponse(200, "email verified successfully", result);
  }

  async requestEmailVerification(req) {
    const result = await AuthService.requestEmailVerification(req.query.email);
    return new CustomResponse(200, "email verification link sent", result);
  }

  async requestPasswordReset(req) {
    const result = await AuthService.requestPasswordReset(req.body);
    return new CustomResponse(200, "password reset link sent", result);
  }

  async resetPassword(req) {
    const result = await AuthService.resetPassword(req.body);
    return new CustomResponse(200, "password updated", result);
  }

  async updatePassword(req) {
    const result = await AuthService.updatePassword(req.params.userId, req.body);
    return new CustomResponse(200, "password updated", result);
  }
}

const AuthCtrl = new AuthController();

export { AuthCtrl };
