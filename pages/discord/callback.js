import authService from "../../server/modules/auth/auth.service";
import { discordAuthService } from "../../server/modules/auth/discord.service";

export default function Callback() {
  return <></>;
}

export const getServerSideProps = async ({ query, res }) => {
  try {
    if (query.error === "access_denied") {
      throw new Error("Discord authorization failed.");
    }

    const discordUser = await discordAuthService.handleCallback(query.code);
    const existingUser = await discordAuthService.checkExistingUser(discordUser);

    if (!existingUser) {
      throw new Error("Try gain after joining our Discord server.");
    }

    const token = await authService._getLoginToken(existingUser);

    res.writeHead(302, { Location: `/login?token=${token}` });
    res.end();

    return { props: { user: discordUser } };
  } catch (err) {
    const params = new URLSearchParams({ loginError: `Login error: ${err.message}` });
    res.writeHead(302, { Location: `/login?${params}` });
    res.end();

    return { props: {} };
  }
};
