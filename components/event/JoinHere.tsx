import dayjs from "dayjs";

export const JoinHere = ({ event }) => {
  // check if event starts within an hour
  const startsInAnHour = dayjs(event.start).diff(dayjs(), "hour") <= 1;

  // check if event has ended
  const hasEnded = dayjs(event.end).diff(dayjs(), "minute") < 0;

  return (
    <>
      {startsInAnHour && !hasEnded && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px h-[54px]">
          <span className="pt-2">Join Here</span>
        </a>
      )}
    </>
  );
};
