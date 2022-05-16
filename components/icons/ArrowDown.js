export default function ArrowDownIcon({ fill, width, height, className }) {
  return (
    <svg
      width={width ? width : 30}
      height={height ? height : 26}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}>
      <path
        d="M15.0406 25.829L0.392197 0.457233L29.689 0.457233L15.0406 25.829Z"
        fill={fill ? fill : "#8A8A8A"}
      />
    </svg>
  );
}
