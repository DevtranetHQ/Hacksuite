import axios from "axios";
import User from "./user.model";
import { config } from "../../config";

const { discord } = config;

class DiscordAuthService {
  getAuthUrl() {
    const params = new URLSearchParams({
      client_id: discord.clientID,
      redirect_uri: discord.callbackURL,
      scope: discord.scope.join(" "),
      response_type: "code"
    });

    return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
  }

  async exchangeCodeForToken(code) {
    const params = new URLSearchParams({
      client_id: discord.clientID,
      client_secret: discord.clientSecret,
      grant_type: "authorization_code",
      code,
      redirect_uri: discord.callbackURL
    });

    const res = await axios.post("https://discord.com/api/oauth2/token", params, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    const { access_token } = res.data;

    return access_token;
  }

  async getUser(accessToken) {
    const userResponse = await axios.get("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    return userResponse.data;
  }

  async checkExistingUser(discordUser) {
    const user = await User.findOne({ discordId: discordUser.id });
    if (!user) return null;

    return user;
  }

  async handleCallback(code) {
    const accessToken = await this.exchangeCodeForToken(code);
    const discordUser = await this.getUser(accessToken);

    return discordUser;
  }

  async addDiscordUser(discordId, email) {
    const user = await User.findOne({ email, isVerified: true });
    if (!user) throw new Error("User does not exist");

    user.discordId = discordId;
    await user.save({ validateBeforeSave: false });

    return true;
  }
}

export default new DiscordAuthService();
