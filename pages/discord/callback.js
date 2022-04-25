import authService from "../../server/modules/auth/auth.service";
import discordAuthService from "../../server/modules/auth/discord.service";

export default function Callback() {
  return <></>;
}

export const getServerSideProps = async ({ query, res }) => {
  const discordUser = await discordAuthService.handleCallback(query.code);
  const existingUser = await discordAuthService.checkExistingUser(discordUser);

  if (!existingUser) {
    res.writeHead(302, {
      Location: `/login?discordLoginError`
    });
    res.end();

    return { props: {} };
  }

  const token = await authService._getLoginToken(existingUser);

  res.writeHead(302, {
    Location: `/login?token=${token}`
  });
  res.end();

  return { props: { user: discordUser } };
};
