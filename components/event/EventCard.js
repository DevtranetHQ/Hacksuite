import Image from "next/image";
import Link from "next/link";
import Avatar from "../Avatar";

export default function EventCard({
    name,
    description,
    organizerName,
    organizerImage,
    datePosted,
    dateEvent,
    link,
    image
}) {
    return (
        <article className="border-b-2 grid grid-cols-3 p-7">
            <div className="col-span-1">
                <img className="rounded-md w-full" src={image} />
            </div>
            <div className="col-span-2 px-7">
                <h1 className="headline">{name}</h1>
                <p className="caption text-black">
                    {description}
                    <Link href={link}>
                        <a className="mx-1 italic underline">Read more</a>
                    </Link>
                </p>
                <p className="font-bold caption">
                    Posted by {organizerName} | {datePosted}
                </p>
            </div>
        </article>
    );
}
