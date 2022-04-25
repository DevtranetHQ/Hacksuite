import DisplayDate from "./../DisplayDate";

export default function EventTime({ start, end }) {
  const startDateObj = new Date(start);
  const endDateObj = new Date(end);

  if (
    startDateObj.getDate() === endDateObj.getDate() &&
    startDateObj.getMonth() === endDateObj.getMonth() &&
    startDateObj.getFullYear() === endDateObj.getFullYear()
  ) {
    return (
      <>
        <DisplayDate date={startDateObj} show="datetime" /> -{" "}
        <DisplayDate date={endDateObj} show="time" />
      </>
    );
  }

  return (
    <>
      <DisplayDate date={startDateObj} show="datetime" /> -{" "}
      <DisplayDate date={endDateObj} show="datetime" />
    </>
  );
}
