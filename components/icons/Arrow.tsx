export default function ArrowIcon({ className, fill, width, height }: any) {
  return (
    <svg
      className={className? className: ""}
      width={width ? width : 41}
      height={height ? height : 16}
      viewBox="0 0 41 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z"
        fill={fill ? fill : "#FFFFFF"}></path>
    </svg>
  );
}
