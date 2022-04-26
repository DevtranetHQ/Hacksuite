export default function ExitIcon({ fill, width, height }) {
  return (
    <svg
      width={width ? width : 18}
      height={height ? height : 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.16675 4L7.00008 5.4L9.16675 8H0.666748V10H9.16675L7.00008 12.6L8.16675 14L12.3334 9L8.16675 4ZM15.6667 16H9.00008V18H15.6667C16.5834 18 17.3334 17.1 17.3334 16V2C17.3334 0.9 16.5834 0 15.6667 0H9.00008V2H15.6667V16Z"
        fill={fill ? fill : "white"}
      />
    </svg>
  );
}
