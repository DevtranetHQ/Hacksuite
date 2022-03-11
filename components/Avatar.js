import Image from "next/image";

export default function Avatar({ image }) {
    return (
        <div className="relative mb-2 w-[158px] h-[158px]">
            <Image className="!border-[5px] border-orange-peel rounded-full" layout="fill" objectFit="cover" src={image}/>
        </div>
    );
}
