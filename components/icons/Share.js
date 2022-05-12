export default function ExternalIcon({ fill, width, height }) {
  return (
    <svg
      className={`${fill ? fill : "fill-#000000"}`}
      width={width ? width : 44}
      height={height ? height : 49}
      viewBox="0 0 44 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5 34.86C34.6633 34.86 33.02 35.585 31.7633 36.7209L14.5325 26.6917C14.6533 26.1359 14.75 25.58 14.75 25C14.75 24.42 14.6533 23.8642 14.5325 23.3084L31.57 13.3759C32.875 14.5842 34.5908 15.3334 36.5 15.3334C38.4228 15.3334 40.2669 14.5695 41.6265 13.2099C42.9862 11.8503 43.75 10.0062 43.75 8.08337C43.75 6.16055 42.9862 4.31649 41.6265 2.95685C40.2669 1.59721 38.4228 0.833374 36.5 0.833374C34.5772 0.833374 32.7331 1.59721 31.3735 2.95685C30.0138 4.31649 29.25 6.16055 29.25 8.08337C29.25 8.66337 29.3467 9.21921 29.4675 9.77504L12.43 19.7075C11.125 18.4992 9.40917 17.75 7.5 17.75C5.57718 17.75 3.73311 18.5139 2.37348 19.8735C1.01384 21.2332 0.25 23.0772 0.25 25C0.25 26.9229 1.01384 28.7669 2.37348 30.1266C3.73311 31.4862 5.57718 32.25 7.5 32.25C9.40917 32.25 11.125 31.5009 12.43 30.2925L29.6367 40.3217C29.5158 40.8292 29.4433 41.3609 29.4433 41.9167C29.4433 45.8075 32.6092 48.9492 36.5 48.9492C40.3908 48.9492 43.5567 45.8075 43.5567 41.9167C43.5567 40.0452 42.8132 38.2503 41.4898 36.9269C40.1664 35.6035 38.3715 34.86 36.5 34.86Z" />
    </svg>
  );
}