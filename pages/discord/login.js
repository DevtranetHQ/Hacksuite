import { discordAuthService } from "../../server/modules/auth/discord.service";

export default function DiscordLogin() {
  return <></>;
}

export async function getServerSideProps(context) {
  if (context.req.cookies.token) {
    context.res.writeHead(302, {
      Location: `/app`
    });
    context.res.end();
  }

  const discordAuthUrl = discordAuthService.getAuthUrl();

  context.res.writeHead(302, {
    Location: discordAuthUrl
  });
  context.res.end();

  return { props: {} };
}
