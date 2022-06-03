export default function HeartIcon({ fill, width, height, className }: any) {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 43 39"
      className={className ? className : ""}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5 39L18.3825 36.1946C7.31 26.2692 0 19.7019 0 11.6894C0 5.12207 5.203 0 11.825 0C15.566 0 19.1565 1.72153 21.5 4.42071C23.8435 1.72153 27.434 0 31.175 0C37.797 0 43 5.12207 43 11.6894C43 19.7019 35.69 26.2692 24.6175 36.1946L21.5 39Z"
        fill={fill ? fill : "#FFFFFF"}
      />
    </svg>
  );
}
