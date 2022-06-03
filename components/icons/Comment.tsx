import { FC } from "react";

const Comment: FC<any> = ({ fill, width, height, className }) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      className={className ? className : ""}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.6 0H4.4C1.98 0 0 1.98 0 4.4V44L8.8 35.2H39.6C42.02 35.2 44 33.22 44 30.8V4.4C44 1.98 42.02 0 39.6 0ZM39.6 30.8H7.04L4.4 33.44V4.4H39.6V30.8Z"
        fill={fill ? fill : "#FFFFFF"}
      />
    </svg>
  );
};

export default Comment;
