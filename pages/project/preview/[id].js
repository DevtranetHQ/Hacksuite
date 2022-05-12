import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../../components/Avatar";
import DarkModeToggle from "../../../components/DarkModeToggle";
import Logo from "../../../components/Logo";
import showdownConverter from "../../../components/showdownConverter";
import AdobeIcon from "../../../components/icons/Adobe";
import ArrowRightIcon from "../../../components/icons/ArrowRight";
import CommentIcon from "../../../components/icons/Comment";
import ShareIcon from "../../../components/icons/Share";
import FacebookIcon from "../../../components/icons/Facebook";
import FigmaIcon from "../../../components/icons/Figma";
import FollowerIcon from "../../../components/icons/Follower";
import GithubIcon from "../../../components/icons/Github";
import HeartIcon from "../../../components/icons/Heart";
import LinkIcon from "../../../components/icons/Link";
import LinkedinIcon from "../../../components/icons/Linkedin";
import TimeIcon from "../../../components/icons/Time";
import TwitterIcon from "../../../components/icons/Twitter";
import PhotoGalleryHeader from "../../../components/project/Photo-galleryHeader";

// NOTE: TESTING
import { useRouter } from "next/router";

export default function Project({ loggedIn, project }) {
  const router = useRouter();
  loggedIn = router.query.ref === "dash" ? true : loggedIn;
  

  const url = `https://app.thedynamics.tech/project/preview/${project.id}`;

  const projectInformation = () => {
    return {
      __html: showdownConverter.makeHtml(project.information)
    };
  };

  async function comment(e) {
    e.preventDefault();
    const comment = e.target.value;
    if (!comment) {
    }
  }

  return (
    <div className="dark:bg-[#202020] dark:text-white">
       <PhotoGalleryHeader
        title={project.name}
        contentText={project.description}
        firstBtn={<>
          <span>
            {project.likes} {project.likes === 1 ? "Like" : "Likes"}
          </span>
          <HeartIcon />
        </>}
        secondBtn={<>
          <span>
            {project.comments.length} {project.comments.length === 1 ? "Comment" : "Comments"}
          </span>
          <CommentIcon />
          </>}
        href="#comments"
        navText="Other projects"
        navHref="/project-gallery"
      />
      <section className="grid grid-cols-3 gap-x-2 py-7">
        <div className="col-span-2 mx-14 my-7 relative min-h-[400px]">
          <Image layout="fill" objectFit="cover" src={project.image} alt="" />
        </div>
        <div className="absolute right-0 bottom-0 w-50 md:w-fit md:relative  py-7">
          <div className="bg-[#F8FBFF] container-gray-dark flex flex-col justify-between p-7 pl-12 pr-20 rounded-l-md h-full col-span-1">
            <div>
              <h1 className="headline font-normal mb-7">Made By</h1>
              {project.creators.map((creator, key) => (
                <div className="flex items-center gap-x-4 mb-2" key={key}>
                  <Avatar
                    className="relative w-[45px] h-[45px]"
                    border="!border-[3px]"
                    image={creator.image}
                  />
                  <h2 className="inline-flex gap-2 items-center self-center subheadline">
                    {creator.name}
                    <Link href={`/profile/${creator.id}`}>
                     <a className="cursor-pointer">
                        <FollowerIcon width="25px" height="25px" className="hover:scale-[1.06] transition-all"/>
                      </a>
                    </Link>
                  </h2>
                </div>
              ))}
            </div>
            <div className="inline-flex gap-2 items-center">
              <TimeIcon />
              <h2 className="caption">{project.date}</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-3 px-14">
        <article
          className="prose prose-lg dark:prose-invert mb-7"
          dangerouslySetInnerHTML={projectInformation()}
        />
        <aside className="flex flex-col gap-y-7">
          <div>
            <h1 className="heading">Made With</h1>
            <div className="flex gap-x-8">
              {project.tags.map((tag, key) => (
                <span
                  className={`${["bg-deep-sky-blue", "bg-fruit-salad", "bg-orange-peel", "bg-link"][key % 4]
                    } px-3 py-2 subheadline text-white rounded cursor-pointer hover:scale-[1.06] transition-all`}
                  key={key}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <h1 className="heading leading-loose mb-3">Check it out</h1>
              <div className="flex flex-col gap-y-4">
                {project.links.map((link, key) => {
                  switch (link.type) {
                    case "github":
                      return (
                        <div className="inline-flex gap-x-5 items-center hover:scale-[1.06] transition-all" key={key}>
                          <GithubIcon width={50} height={50} />
                          <a className="subheadline underline" href={link.link}>
                            on GitHub
                          </a>
                        </div>
                      );
                    case "figma":
                      return (
                        <div className="inline-flex gap-x-5 items-center hover:scale-[1.06] transition-all" key={key}>
                          <FigmaIcon />
                          <a className="subheadline underline" href={link.link}>
                            on Figma
                          </a>
                        </div>
                      );
                    case "adobe":
                      return (
                        <div className="inline-flex gap-x-5 items-center hover:scale-[1.06] transition-all" key={key}>
                          <AdobeIcon />
                          <a className="subheadline underline" href={link.link}>
                            on AdobeXD
                          </a>
                        </div>
                      );
                    default:
                      return (
                        <div className="inline-flex gap-x-5 items-center hover:scale-[1.06] transition-all" key={key}>
                          <LinkIcon />
                          <a className="subheadline underline" href={link.link}>
                            Via this Link
                          </a>
                        </div>
                      );
                  }
                })}
              </div>
            </div>
            <div>
              <h1 className="heading leading-loose">Share it</h1>
              <div className="flex gap-x-4 items-center">
                <a href={`https://twitter.com/intent/tweet?url=${url}`} className="hover:scale-[1.06] transition-all">
                  <TwitterIcon />
                </a>
                <a href={`https://www.facebook.com/sharer.php?u=${url}`} className="hover:scale-[1.06] transition-all">
                  <FacebookIcon />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} className="hover:scale-[1.06] transition-all">
                  <LinkedinIcon />
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(url)}
                  title="Copy link">
                  <ShareIcon fill="fill-black dark:fill-white" />
                </a>
              </div>
            </div>
          </div>
          <h1 className="heading leading-loose">Comments</h1>
          <div className="flex justify-betweeen">
            <div></div>
            <div></div>
            {!loggedIn ?  <p className="text-center w-[100%] mb-10">
                      <Link href="/login">
                        <a>Log in</a>
                      </Link>{" "}
                      or{" "}
                      <Link href="/signup">
                        <a>Sign up</a>
                      </Link>{" "}
                      to add a comment to this project.
                    </p> : null}
          </div>
        </aside>
      </div>
      {!loggedIn && (
        <footer className="bg-[#f4f4f4] dark:bg-[#444444] p-5 text-center">
          <p className="sm">
            You’ve reached the end, why not become a{" "}
            <Link href="/signup">
              <a>member</a>
            </Link>{" "}
            and show us all the cool things you’ve made?
          </p>
        </footer>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  // TODO: Use id to get event info from database
  const { id } = context.query;
  return {
    props: {
      loggedIn: false,
      project: {
        name: "Web scraper",
        date: "11:00 am, Today",
        image:
          "https://s3-alpha-sig.figma.com/img/ed76/0bd2/dc09e6a239152f3692e81f49e87d94ed?Expires=1648425600&Signature=SH5jfL4wpxDK9owW63TVmcEX50ridBg7eLXkDa3RhBiCnTR~2WNrtBk-msr4RNRoYYRS~YfdposbXQqU2mLbWTCPk1plAnY~NIGg5moaKvRmYS4dKsHLvWmw~yE6R948kU4fRb8jhHgyIImyeTcoTL3UUZAv~ndSe31W4mvwqM~ov6NodRIFLDB02PEGoMdpERHVv-iXJ4dOS~k3DW06B0VDzNDhPfG543D0fzBcub7DGou7ocYkBOpC-Majx6amUPGcV5oyc5JVFEZCqH226y2dfm-J-7izNcd0vhQLp8ByDmP0FLjmotz7jLcCeyW-ZcIrufurzmSJRHEBmNhWvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        description:
          "A chrome extension that gathers vital information a the tap of a button, easy as ABC",
        information: `# OfficeHours

This is my entry for my first ever hackathon!

## Inspiration

As a student, I've heard a lot of teachers, especially during remote learning, complain that they don't get the opportunity to answer some students' emails because they receive a mass of emails everyday in addition to the emails they already have in their messy, unorganized inbox. As a result, not only are they unable to get to all emails, they have to spend more time outside of work decluttering their inbox and responding to students that are emailing them during odd times (for example, around midnight, when online assignments are typically due). *OfficeHours is designed to combat this problem by presenting a platform that teachers and other people who deal with messy inboxes as a result of direct emails can utilize to become more efficient in their work and find a better work/life balance.*

## What it does

It's as simple as it sounds: office hours for inboxes. Users can choose a time, and people will only be able to message them during this time. OfficeHour will notify the user if anybody messages them during these hours. The more important thing is that it's divided into groups, so the organization has already been done for them! And because it utilizes the concept of office hours, users won't need to worry about catching up to unread emails when they're not at work or when they aren't available on OfficeHours.

## How I built it

Since it's an MVP, I built it using some technologies that I have decent experience in:

* SQL, using the SQLAlchemy ORM in Python
* Flask
* HTML/CSS with Sass & Bootstrap
* Deployment with Heroku

I started by laying out the design first and then dealing with the backend logic.

## Challenges I ran into

I had planned a bigger scope with this project, but I learned that for hackathons, you need to really go deep into the problem you're trying to solve and focus on the most necessary parts. This was the case for me. In addition, I had to utilize time management to actually get this project on time in addition to attending to other personal responsibilities.

## Accomplishments that I'm proud of/what I learned

Overall, I'm proud of what I was able to create during my first hackathon. I learned a lot about time management. As a perfectionist, I had to learn to accept the messiness of my project if I actually wanted to finish it. I've never really used Devpost or Discord before, so those were new to me as well. As for my project, I learned about socket programming in Python with Flask and how to use it in order to update messages simultaneously. Basically, this was a great learning opportunity and I can't wait to join my next hackathon, even though I feel dead-tired right now. :)

## What's next for OfficeHours

At this point, OfficeHours is simply an MVP. There are so many more features that could be added to it in order to make it more usable. By features, I don't mean making it more complicated. That only causes problems. Rather, here are some of the features I would consider adding:

* Public announcements to everyone in a group
* A better designed sign up/log in page and dashboard page
* Direct invite links + extra security to ensure that only those who received a user's invite link can join
* More CRUD functions that haven't been included, such as the ability to update a group's open and close hours
* Rich text editing for messages
* OAuth with Google and integration with the [Google Classroom API](https://classroom.google.com/) so teachers can directly add their students automatically instead of manually inviting students
* Pricing for users that go above a certain amount of data
`,
        tags: ["NextJS", "JavaScript", "HTML", "Python"],
        links: [
          {
            type: "github",
            link: "https://github.com/TheDynamics"
          },
          {
            type: "figma",
            link: "https://github.com/jianmin-chen"
          },
          {
            type: "adobe",
            link: "https://github.com/adobe"
          },
          {
            type: "general",
            link: "https://github.com/TheDynamics"
          }
        ],
        likes: 2,
        comments: [
          {
            name: "Dora Palfi",
            image:
              "https://s3-alpha-sig.figma.com/img/8b67/0b55/e794d296ad1112b8c3d9a61cc83abe91?Expires=1648425600&Signature=Q8kNPcS7IrL5jEouDI0HPV3lbwAj30IYOFrN-CFMPy6mtZXs8VADSy8UGrzmksl~DSBXi-gUgVr5OIrugmbedWThA79WKvaTsN2HsnJmOl4ZR7Xhh~XKx2vPTqPTXvH3VKpyp3HYJv1qRw1ROWqdDHRlQ5wFiMLECmLLUNDFZOTxedOXxzh67BC6bwgJ~5WG~41evv7ZH0pYmQCWTOw72EdMA5mZykZhLUwbhcPsz7HPi5I4ZlqbI-xMRdHHYHqOELZYKbvdMPG0NLGcIt0IQnSKTqJNcAlycOYhlRXS3jZ0kGlq-u~dkVngc5u6TuOtGX-X9H9dOfzijJsE3yri1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            date: "1:00 pm, Today",
            comment: "Great Project!",
            likes: 1
          },
          {
            name: "Bill Gates",
            image:
              "https://s3-alpha-sig.figma.com/img/9c1a/b700/6fc120580122cc5c1443394d7cbd3883?Expires=1648425600&Signature=Z25Tpe97DPmMlDE0NoosTHwMoU~CS~WKfBi~aTS4Y6JMeseTUifDZ5A~Hfq7ue78zOxPVHKXIb3~J9ewChkxYt9ATzRjuccQVacZqGngIGZ7L186rJNxFMDqDbi4L66JL76vHpJ0tC01wQXRVU4eNkcFLBhyedrpiR4sLGGQLphPU~2R64inbhg~TARR6u5jrAwvHJDfG4VQNMWkszEsKE7oxfgVjUR5NFaWhAPS~VEW22sExY3tNX3ZCTuXvF4U9~51B3I39CxC72y5UQB8y2uSoUWJfJ-PH~xc2OYyWvp-NHrSV6wfAIQHC5p9xaVF2CEIW7YYmq40YjcxwB7v2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            date: "2:00 pm, Today",
            comment: "Amazing Project!",
            likes: 1
          }
        ],
        creators: [
          {
            name: "Zach Latta",
            image:
              "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1648425600&Signature=BHMNOhVF9EQOSs09rh7Ot1GJBIjwiP1Vm86GNt~do1Zj5KFVYaVo0uCaL6umlWfrzhuOZ-tt3VaDqA-JSAU1PJGCMLnJWU2gXn6fZR4vPExQY2yPduYPxctiooLF7qJKEnw3RJS9GSH~pcr-7Ux5nb6FG40z799PuKbiSjbq0E5mB8~0FlOolFN62nQ9~BD6K4FNrr9FXBYV~k4gpSEW-YFCDwE0vi8PnDD0baN-J0JddjcDEwF6QnL6K9cJ5~Jxtc6qTaBpvnHPZOMLtnydOuiGK43Gys2fJBI60FMxtaNx5hsm4REJG396RsXKmvuVGbFh08i6uM~SdGeCU4feOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "123"
          }
        ]
      }
    }
  };
}

