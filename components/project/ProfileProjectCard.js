import { bubbleTrimmer } from "../../pages/profile/[id]";
import Image from "next/image";
import Avatar from "../Avatar";

/**
 * User profile project Card component
 *
 * @param {Date} date - Project date
 * @param {String} image - Path to project image
 * @param {String} title - Project title
 * @param {String} desc - Project description
 * @param {String[]} tags - Array of related project tags
 * @param {Number} likes - Number of like
 * @param {Number} comments - Number of comments
 * @returns  Card Component
 */
export default function ProfileProjectCard({ ...props }) {
    const { date, image, title, desc, tags, likes, comments, bubbles } = props;
    return (
        <div className="w-[800px] h-[550px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden p-3 shadow-xl hover:shadow-xxl">
            {/* ====== #TOP SECTION */}
            <div className="w-full h-[20%]  flex items-center justify-between relative pl-4 pr-4 ">
                <span className="relative flex gap-4 items-center">
                    {bubbles &&
                        bubbles.map((bubble, index) => {
                            return (
                                <Avatar
                                    image="/assets/TEST/img-8.jpg"
                                    className="w-11 h-11 relative -m-4"
                                />
                            );
                        })}
                    <p className="ml-4 caption">{date}</p>
                </span>
                <span></span>
            </div>

            {/* ====== #IMAGE */}
            <div className="w-full h-[60%]  flex items-center justify-center relative">
                <Image src="/assets/TEST/img-8.jpg" alt="" layout="fill" className="object-cover" />
            </div>

            {/* ====== #TEXT SECTION */}
            <div className="w-full h-[13%] ">
                <h4 className="subheadline">{title}</h4>
                <p className="caption">{desc}</p>
            </div>

            {/* ====== #BOTTOM SECTION */}
            <div className="w-full h-[7%] ">
                <p className="caption">tags: {tags}</p>
            </div>
        </div>
    );
}
