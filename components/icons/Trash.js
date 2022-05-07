export default function TrashIcon({ width, height }) {
  return (
    <svg
      className="fill-black dark:fill-white"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M2.14286 30.2222C2.14286 31.2241 2.59439 32.185 3.39811 32.8935C4.20184 33.602 5.29193 34 6.42857 34H23.5714C24.7081 34 25.7982 33.602 26.6019 32.8935C27.4056 32.185 27.8571 31.2241 27.8571 30.2222V7.55556H2.14286V30.2222ZM6.42857 11.3333H23.5714V30.2222H6.42857V11.3333ZM22.5 1.88889L20.3571 0H9.64286L7.5 1.88889H0V5.66667H30V1.88889H22.5Z" />
    </svg>
  );
}
