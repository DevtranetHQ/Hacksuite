import dayjs from "dayjs";

export default function DisplayDate({ date, show }) {
  const dayObj = dayjs(date);

  const dateString = dayObj.format(`MMM DD, YYYY`);
  const timeString = dayObj.format(`h:mm A`);

  return (
    <>
      {show.includes("date") && <>{dateString}</>} {show.includes("time") && <>{timeString}</>}
    </>
  );
}
