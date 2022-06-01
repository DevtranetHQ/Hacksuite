import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";
import Landing from "./landing";

// import { projectService } from "../server/modules/projects/project.service";
// import { withAuth } from "../server/middlewares/auth.middleware";
// import eventService from "../server/modules/events/event.service";

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
  let scrapbookItem1 = {
    username: "Zach Latta",
    userimg: "/assets/TEST/profile.jpg",
    time: "8 :03pm",
    text: `I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.
  
      I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight.
      `,
    image: "/assets/TEST/user_projects/img-6.png"
  };
  let project1 = {
    _id: "62707262c1d7295f1b8ad078",
    uniqueId: "web-scrapper",
    name: "Web Scrapper",
    description:
      "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
    image: "/assets/TEST/user_projects/img-1.png",
    creator: null,
    collaborators: [],
    tools: ["NextJs", "Figma"],
    stage: "",
    links: [],
    published: true,
    createdAt: "2022-05-03T00:08:02.902Z",
    updatedAt: "2022-05-03T00:21:04.985Z",
    __v: 0,
    publishedAt: "2022-05-03T00:21:04.983Z"
  };
  let event1 = {
    _id: "62625ca1e2472047f7de59bd",
    name: "Hackathon on Elon Musk's private jet",
    image:
      "https://thedynamics-uploads.s3.amazonaws.com/events/hackathon-on-elon-musks-private-jet.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    start: "2022-05-14T01:57:24.870Z",
    end: "2022-05-15T01:29:24.870Z",
    creator: {
      _id: "627f22b829e68bfc34d050ee",
      firstName: "Ibrahim",
      lastName: "Salami"
    },
    createdAt: "2022-04-22T07:43:29.628Z",
    updatedAt: "2022-04-22T07:43:29.628Z",
    posted: "2001-01-15T19:00:00.000Z",
    link: "https://google.com",
    uniqueId: "hackathon-on-elon-musks-private-jet",
    __v: 0
  };

  // proj gallery
  // const user1 = await withAuth(req => req.$user)(req, res);
  // const projects = await projectService.getPublishedProjects({});

  // events
  // const events = await eventService.getUpcomingEvents();

  return {
    props: {
      // scrapbook
      loggedIn: true,
      user: {
        name: "Zach Latta",
        no_of_followers: 10,
        scrapbookItem: [scrapbookItem1, scrapbookItem1, scrapbookItem1, scrapbookItem1]
      },

      // proj gallery
      // loggedIn: !!user1,
      projects: [project1, project1, project1, project1],

      // events
      events: [event1]
    }
  };
}
