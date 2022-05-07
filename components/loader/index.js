import Image from "next/image";
// @ts-expect-error cannot type an image file
import loaderImage from "./loader.png";

export const Loader = ({ width = 100, height = 100 }) => {
  return (
    <Image src={loaderImage} alt="Loading..." width={width} height={height} className="loader" />
  );
};
