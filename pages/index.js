import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";
import Landing from "./landing";

import { projectService } from "../server/modules/projects/project.service";
import { withAuth } from "../server/middlewares/auth.middleware";
import eventService from "../server/modules/events/event.service";

export default function Index({ user, projects, events, loggedIn }) {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.user) {
      router.push("/app");
    } else {
      setLoading(false);
    }
  }, [auth.user, router]);

  if (loading) return <LoadingPage />;
  else return <Landing user={user} projects={projects} events={events} loggedIn={loggedIn} />;
}

export async function getServerSideProps({ req, res }) {
  // proj gallery
  const user1 = await withAuth(req => req.$user)(req, res);
  const projects = await projectService.getPublishedProjects({});

  // events
  const events = await eventService.getUpcomingEvents();

  // scrapbook
  let scrapbookItem1 = {
    username: "Zach Latta",
    userimg: "/assets/TEST/profile.jpg",
    time: "8 :03pm",
    text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.
  
      I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
      `,
    image: "/assets/TEST/user_projects/img-6.png"
  };
  return {
    props: {
      // scrapbook
      // loggedIn: true,
      user: {
        name: "Zach Latta",
        no_of_followers: 10,
        scrapbookItem: [scrapbookItem1, scrapbookItem1, scrapbookItem1, scrapbookItem1]
      },

      // proj gallery
      loggedIn: !!user1,
      projects,

      // events
      events
    }
  };
}
