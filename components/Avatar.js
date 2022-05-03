import Image from "next/image";

export default function Avatar({ className, border, image }) {
  return (
    <div className={`${className ? className : "relative mb-2 w-[158px] h-[158px]"}`}>
      <Image
        className={`!border-solid ${
          border ? border : "!border-[2.67px]"
        } !border-orange-peel rounded-full`}
        layout="fill"
        objectFit="cover"
        src={image}
      />
    </div>
  );
}

