export default function FigmaIcon({ fill = "", width = "", height = "" }) {
  return (
    <svg
      width={width ? width : 18}
      height={height ? height : 18}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.50016 15.6667V8.66667H0.833496L9.00016 0.5L17.1668 8.66667H12.5002V15.6667H5.50016ZM0.833496 20.3333V18H17.1668V20.3333H0.833496Z"
        fill={fill ? fill : "#FFFFFF"}
      />
    </svg>
  );
}
