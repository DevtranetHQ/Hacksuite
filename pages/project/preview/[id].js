import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../../components/Avatar";
import DarkModeToggle from "../../../components/DarkModeToggle";
import Logo from "../../../components/Logo";
import showdownConverter from "../../../components/showdownConverter";
import AdobeIcon from "../../../components/icons/Adobe";
import ArrowRightIcon from "../../../components/icons/ArrowRight";
import ArrowDownIcon from "../../../components/icons/ArrowDown";
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

  // URL for sharing
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
      <nav className="flex items-center justify-between pl-8 pr-12">
        <Logo className="w-[120px] py-5" />
        <div className="flex gap-x-2">
          <DarkModeToggle
            className="mx-0 w-[40px] h-[40px]"
            darkClassName="mx-0 w-[40px] h-[42px]"
          />
          <a href="https://github.com/TheDynamics">
            <GithubIcon />
          </a>
          <Link href="/project-gallery">
            <button className="button-medium button-deep-sky-blue inline-flex gap-x-3 items-center mx-2">
              Other projects
              <ArrowRightIcon />
            </button>
          </Link>
        </div>
      </nav>
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
      />      
      <section className="md:grid grid-cols-3 gap-x-2 py-7 relative">
        <div className="col-span-2 md:mx-14 my-7 relative min-h-[800px] md:min-h-[400px]">
          <Image layout="fill" objectFit="cover" src={project.image} />
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
                  <h2 className="inline-flex gap-2 items-center pt-3 subheadline">
                    {creator.name}
                    <Link href={`/profile/${creator.id}`}>
                      <a className="cursor-pointer">
                        <FollowerIcon />
                      </a>
                    </Link>
                  </h2>
                </div>
              ))}
            </div>
            <div className="inline-flex gap-4 items-center mt-7 ml-3">
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
            <h1 className="heading">Made with</h1>
            <div className="flex gap-x-8">
              {project.tags.map((tag, key) => (
                <span
                  className={`${["bg-deep-sky-blue", "bg-fruit-salad", "bg-orange-peel", "bg-link"][key % 4]
                    } px-3 py-2 subheadline text-white rounded`}
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
                        <div className="inline-flex gap-x-5 items-center" key={key}>
                          <GithubIcon width={50} height={50} />
                          <a className="subheadline underline" href={link.link}>
                            on GitHub
                          </a>
                        </div>
                      );
                    case "figma":
                      return (
                        <div className="inline-flex gap-x-5 items-center" key={key}>
                          <FigmaIcon />
                          <a className="subheadline underline" href={link.link}>
                            on Figma
                          </a>
                        </div>
                      );
                    case "adobe":
                      return (
                        <div className="inline-flex gap-x-5 items-center" key={key}>
                          <AdobeIcon />
                          <a className="subheadline underline" href={link.link}>
                            on AdobeXD
                          </a>
                        </div>
                      );
                    default:
                      return (
                        <div className="inline-flex gap-x-5 items-center" key={key}>
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
                <a href={`https://twitter.com/intent/tweet?url=${url}`}>
                  <TwitterIcon />
                </a>
                <a href={`https://www.facebook.com/sharer.php?u=${url}`}>
                  <FacebookIcon />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
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
          <h1 className="text-30px font-bold mt-7">Comments</h1>
          <div className="grid grid-cols-12 mx-14 items-center">
            <div className="col-span-1">
              <Avatar
                border="!border-[3px]"
                className="relative w-[65px] h-[65px]"
                image={project.owner.image}
              />
            </div>
            <div className="col-span-10 px-3">
              <h1>
                <span className="text-24px font-semibold">{project.owner.name}</span>{" "}
                <em className="ml-2 font-thin text-20px italic">Made this project —{project.date}</em>
              </h1>
              <h1 className="text-18px italic text-[#515151] mt-2">leave feedback in the comments!</h1>
            </div>
            <div className="col-span-1">
              <ArrowDownIcon width="18px" height="18px"/>
            </div>
          </div>
          <div className="grid grid-cols-12 mx-14 mb-14">
            <div className="col-span-1" />
            <div className="col-span-10 px-3">
              <div className="bg-[#f5f5f7] rounded-2xl">
                {project.comments.map((comment, key) => (
                  <div className="border-b-4 px-7 py-5" key={key}>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1">
                        <Avatar
                          border="!border-[3px]"
                          className="relative w-[50px] h-[50px]"
                          image={comment.image}
                        />
                      </div>
                      <div className="col-span-11">
                        <h1>
                          <span className="subheadline">{comment.name}</span>{" "}
                          <span className="caption ml-1">{comment.date}</span>
                        </h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1" />
                      <div className="col-span-10">
                        <p>{comment.comment}</p>
                        <p className="caption inline-flex gap-x-1 items-center">
                          Like{" "}
                          <span className="cursor-pointer">
                            <HeartIcon fill="#C50000" width={20} height={20} />
                          </span>{" "}
                          {comment.likes}
                        </p>
                      </div>
                      <div className="col-span-1" />
                    </div>
                  </div>
                ))}
                <div className="px-7 py-5">
                  {loggedIn ? (
                    <div className="grid grid-cols-12">
                      <div className="col-span-1 py-3">
                        <Avatar
                          border="!border-[3px]"
                          className="relative w-[50px] h-[50px]"
                          image={loggedIn.image}
                        />
                      </div>
                      <div className="col-span-11">
                        <form className="!p-0">
                          <textarea
                            className="form-input resize-none"
                            name="comment"
                            placeholder="Write a comment"
                          />
                          <button className="button-small button-deep-sky-blue" onSubmit={comment}>
                            Post comment
                          </button>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center">
                      <Link href="/login">
                        <a>Log in</a>
                      </Link>{" "}
                      or{" "}
                      <Link href="/signup">
                        <a>Sign up</a>
                      </Link>{" "}
                      to add a comment to this project.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-1" />
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
      loggedIn: {
        image:
          "https://s3-alpha-sig.figma.com/img/0056/8ecc/0295dcc48feb18dca1fb9a8e7db00fba?Expires=1652054400&Signature=IJcsMCBtKaohWK7hdo8~SCrBNTZIt35mdr6U0yoEbegM-Vrm0Bqa-JkP-doqd6BlmmeD36ayZ-qGj-Piv7ACQvVqUTUUHTJP6EA68ud-rXdOSy3mRZDDVaF7UCds--tmG1Yeei2-5gf6XWMbiB5ej0dtb-aWycB0UB9J2N1g0N0qvThTH9io7ukwoWJmIFz8mQOXfoy23kmcfuh72cE2-11ARbBXeZRXiZI1m7Iy-MEDYzLXI4XgSRrKpBM7iwMSEAN0QtBWvoU0iC7RidDb6meJRL2lujQyZUou5KUsttKwA96BbuSxryYkS4sekD2sDAic4H1rdzl7sCTrFey5Fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      project: {
        id: id,
        name: "Web scraper",
        date: "11:00 am, Today",
        image:
          "https://s3-alpha-sig.figma.com/img/ed76/0bd2/dc09e6a239152f3692e81f49e87d94ed?Expires=1652054400&Signature=W2SlpLtGHfaojO7jy~8a9edb8-CpirVJVvEFCPrKewoLEH9Z8GL0GsecHR~Q4S4gTd6vk~myv6Mr7jEdMb4QnHjlPJeGqtgPwNKzZW9EK7lydNkJ1T3rAal6zVuRsr4LGkVIwa-np~CmcpehZ5nJNo2BBvyQ29wGDzPDFafpK57XCI83p9cHNiKTFzhZ9W6Hao8uYeUjl~-D49Xv3K3eGHdPeWohDDqNsNkw-8jtVAdkXBrGmT2wtFAC4T~0-XxUgx-Jax3gSrUQotz8fKMkkWhNUhPeFrytc-B26DWiRS~oYE5Lcc3DccQfbkmo5sa-7MThTxHfL6AGwng~rADD-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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

\`\`\`python
def func():
  print("Just testing")
\`\`\`

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
              "https://s3-alpha-sig.figma.com/img/8b67/0b55/e794d296ad1112b8c3d9a61cc83abe91?Expires=1652054400&Signature=K-3h9l76-m0MrUpxeQKY2cQIy8FtGYgi~~eTXcWkSHophZD69tTPgH5SjrVtUKKaZ4X2KdwyeYwoeWb-p59GvoG6i7hvMEKXGAWawRCwOfq~KuIheoXcuT4io5VpqK-30cQH4HdpbpJhMBGNmO-El5sn9dvgigFy1JO6rxlpOeLOKbK3ADoBLLgWYJ4WpLdIJeyg-ybUjus7xIh6GVoNV3oYT0moADfTdF9AlAK2WPhtCDCmiGFd1UoL12BlwQDlPsdzAPsDrqpw~qdcdo4S-7eRGvWsJehuF~D49ROXBylLASPE-3fSonDFlVemubzMKFhvQxUYYah~bxttXbIIrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            date: "1:00 pm, Today",
            comment: "Great Project!",
            likes: 1
          },
          {
            name: "Bill Gates",
            image:
              "https://s3-alpha-sig.figma.com/img/9c1a/b700/6fc120580122cc5c1443394d7cbd3883?Expires=1652054400&Signature=To05JpnUL4VNdO~OgIUj-B15TGrsqawljpk7A3Xb0RuHBWH-HyPCdhHPXWIRNx6u2Jpvj3rPUxtEQi8hRpxxVWuCJbGkGyLuQ5xoH7w-pHAbDv1LjwP7E3~63-D8-jsXRyYdM~Ivy1QJOaXo8wFgyE0WPyaZZ11U-E-dOhaJqb9SI5OLkL2h8I1ddeKWCJw6AafTOGyI46b9p-lk8SB6ZIpof46yMZEymgeKAM7kdm8xgTlEhqHOuTXHb8FWtJNoVaxFw1fljmpsxbGr3Pkcmh11f41Rz-D4OeR2Iqq07J4f6c42B8udlU098KqSIt--j1N30YQa3m9~Dt8P0ZmG1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            date: "2:00 pm, Today",
            comment: "Amazing Project!",
            likes: 1
          }
        ],
        owner: {
          name: "Zach Latta",
          image:
            "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1652054400&Signature=NfH3KTrkcZqbX21dkEqKT7VnO9svLoWnAgoC1mMjqHWmv1euOMfbm0IdLHjP-0nf9PqDL1SuRzRgPHDgRrzKyDetqGyaX0SzgGY6puHLfn519ibMQc37Ty1k1y2nAe0LQiDNSjcdyhq~U2h8kRoNitY-L19zgDEOdfqlAVT0M-dfVsb5JgzxlaioOaN3pSFxJT4H5CbMEv54FgEjWmOrPP0z9OBtzecdcnqsNFTR7AMJXOkUi78O311-GYFCV~GVZdMPKnMlbCyyHaVH7UTjippO0dv7fQafoueOlRAji-oeVrAU5wzjsha1nIKTasM7uMOUeGXKRLLsaXeBY-XtWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "123"
        },
        creators: [
          {
            name: "Zach Latta",
            image:
              "https://s3-alpha-sig.figma.com/img/4d26/2767/d0b64dcacf31bfa508adcc47aea65677?Expires=1652054400&Signature=NfH3KTrkcZqbX21dkEqKT7VnO9svLoWnAgoC1mMjqHWmv1euOMfbm0IdLHjP-0nf9PqDL1SuRzRgPHDgRrzKyDetqGyaX0SzgGY6puHLfn519ibMQc37Ty1k1y2nAe0LQiDNSjcdyhq~U2h8kRoNitY-L19zgDEOdfqlAVT0M-dfVsb5JgzxlaioOaN3pSFxJT4H5CbMEv54FgEjWmOrPP0z9OBtzecdcnqsNFTR7AMJXOkUi78O311-GYFCV~GVZdMPKnMlbCyyHaVH7UTjippO0dv7fQafoueOlRAji-oeVrAU5wzjsha1nIKTasM7uMOUeGXKRLLsaXeBY-XtWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "123"
          },
          {
            name: "Bella See",
            image:
              "https://s3-alpha-sig.figma.com/img/0056/8ecc/0295dcc48feb18dca1fb9a8e7db00fba?Expires=1652054400&Signature=IJcsMCBtKaohWK7hdo8~SCrBNTZIt35mdr6U0yoEbegM-Vrm0Bqa-JkP-doqd6BlmmeD36ayZ-qGj-Piv7ACQvVqUTUUHTJP6EA68ud-rXdOSy3mRZDDVaF7UCds--tmG1Yeei2-5gf6XWMbiB5ej0dtb-aWycB0UB9J2N1g0N0qvThTH9io7ukwoWJmIFz8mQOXfoy23kmcfuh72cE2-11ARbBXeZRXiZI1m7Iy-MEDYzLXI4XgSRrKpBM7iwMSEAN0QtBWvoU0iC7RidDb6meJRL2lujQyZUou5KUsttKwA96BbuSxryYkS4sekD2sDAic4H1rdzl7sCTrFey5Fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "345"
          },
          {
            name: "Eniola Osabiya",
            image:
              "https://s3-alpha-sig.figma.com/img/d918/ced4/d006edb135bca7573615fc4beb6858bc?Expires=1652054400&Signature=ccMSO6IDqGORy88iMPYA61h2f9WLPw234-dbeimD0-wcKirPzEyXLF9odiq5va6yoms~EZ81lVsDAjEVa6~BnTb0PmRG4UTE4L5JBYkd29x3DIRjyj0yuUcdj8Kt0EWbJrkjs0EC4qwKSZzjjD7ZY79lCnTPqau4bpF9TwLTB3pPJKVKYOXxYFDbHwsC6DRXY6CZNykdHsmGUhgy3Q7pO88F1unwmt2YA0vjVbjpeK3OrCcSwuq0EHEjnpxHHvET6bVYwO0cWEHF8qt0O3BUBguHM0XWmh4gb62LzinsER~DnNKL6LjSi-m2-1VHOMlCnoNQM87vyqsfMzU4hZ11hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "456"
          },
          {
            name: "Bill Gates",
            image:
              "https://s3-alpha-sig.figma.com/img/9c1a/b700/6fc120580122cc5c1443394d7cbd3883?Expires=1652054400&Signature=To05JpnUL4VNdO~OgIUj-B15TGrsqawljpk7A3Xb0RuHBWH-HyPCdhHPXWIRNx6u2Jpvj3rPUxtEQi8hRpxxVWuCJbGkGyLuQ5xoH7w-pHAbDv1LjwP7E3~63-D8-jsXRyYdM~Ivy1QJOaXo8wFgyE0WPyaZZ11U-E-dOhaJqb9SI5OLkL2h8I1ddeKWCJw6AafTOGyI46b9p-lk8SB6ZIpof46yMZEymgeKAM7kdm8xgTlEhqHOuTXHb8FWtJNoVaxFw1fljmpsxbGr3Pkcmh11f41Rz-D4OeR2Iqq07J4f6c42B8udlU098KqSIt--j1N30YQa3m9~Dt8P0ZmG1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "2234"
          },
          {
            name: "Stephanie Su",
            image:
              "https://s3-alpha-sig.figma.com/img/b784/3879/68ae447ee1c119fe0d99cc44e30cc3dc?Expires=1652054400&Signature=eeZLzGrZBygfcDgQXKfkczSp9~hkjhsLPrvFMmp~ZGajtKWwyfqIWl7SRptB8bG-cqsWbCdFnxMl1EOhEHm5oYzI5sgURmnFQlWr5Ymfw3LZWmqdAiK0wpoSZdIhL0P26~QmyA5lYEIQw3FOdpnHPFUTjKRqBfYm90qsvDLwBsudjYWv6chBq2LH9Zv-SD8TQ90FNUFDelMc-YpGfZIUcGG8ENgiudNMyklU4BG5cEZcvCF7Bpqdo59QwsasiXLylMULZ-K~VrZzNT37mR7TBv--0nFyAblRDwS1Vo6Z15mAIc2HsFBCafkib-Qg~f3uFkn2YikLWN1Iciuuz2GNFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            id: "342"
          }
        ]
      }
    }
  };
}
