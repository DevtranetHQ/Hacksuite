import Link from "next/link";
import Avatar from "../Avatar";
import avatarImage from "../../public/assets/avatar.webp";
import EventTime from "./EventTime";
import DisplayDate from "../DisplayDate";

export default function EventCard({ _id, name, image, description, start, end, creator, posted }) {
  // TODO: Replace const with actual state (whether that be React context, getServerSideProps, etc.)
  const loggedIn = false;
  const route = `/events/${_id}`;
  return (
    <article className="border-b-2 grid grid-cols-3 items-center p-7">
      <div className="col-span-1 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-md w-full" src={image} alt={`image for event ${name}`} />
        <Avatar
          className="absolute -top-5 -left-5 w-[90px] h-[90px]"
          image={creator.image || avatarImage}
          border='!border-[5px]'
        />
      </div>
      <div className="col-span-2 px-7">
        <section className="mb-2">
          <h1 className="headline">{name}</h1>
          <p className="caption text-black dark:text-white">
            {description}
            <Link href={route}>
              <a className="mx-1 italic underline">Read more</a>
            </Link>
          </p>
          <p className="font-bold caption text-[#a5a5a5]">
            Posted by {creator.firstName} {creator.lastName} |{" "}
            <DisplayDate date={new Date(posted)} show="date" />
          </p>
        </section>
        <section className="flex justify-between">
          <div className="inline-flex gap-4 py-2 items-center">
            <svg
              width="33"
              height="38"
              viewBox="0 0 34 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.305 20.2016L23.3617 18.1599L14.415 27.5597L10.5283 23.4761L8.585 25.5179L14.415 31.6432L25.305 20.2016V20.2016ZM29.8333 4.67653H28V0.824158H24.3333V4.67653H9.66667V0.824158H6V4.67653H4.16667C2.13167 4.67653 0.518333 6.4101 0.518333 8.52891L0.5 35.4956C0.5 36.5173 0.886308 37.4971 1.57394 38.2196C2.26158 38.9421 3.19421 39.3479 4.16667 39.3479H29.8333C31.85 39.3479 33.5 37.6144 33.5 35.4956V8.52891C33.5 6.4101 31.85 4.67653 29.8333 4.67653ZM29.8333 35.4956H4.16667V14.3075H29.8333V35.4956Z"
                fill="#FF9700"
              />
            </svg>
            <p className="subheadline">
              <EventTime start={start} end={end} />
            </p>
          </div>
          <Link href={route}>
            <button className="button-small button-deep-sky-blue">
              {loggedIn ? "Add to my calendar" : "Register now"}
            </button>
          </Link>
        </section>
      </div>
    </article>
  );
}
