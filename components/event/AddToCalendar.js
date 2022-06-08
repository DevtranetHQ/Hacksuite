import { useState, useEffect } from "react";
import { usePopper } from "react-popper";
import dayjs from "dayjs";
import CalendarIcon from "./../icons/Calendar";
import { Icon } from "@iconify/react";

const getEventDescriptionHTML = ({ name, description, link, url }) => {
  const linkText = `<strong>Join the Event here: <a href="${link}">${link}</a></strong>`;
  const urlText = `<strong>Link to Event Details: <a href="${url}">${url}</a></strong>`;

  return `<h2>${name}</h2>${description}<br><br>${linkText}<br><br>${urlText}`;
};

const getEventDescriptionText = ({ name, description, link, url }) => {
  const linkText = `Join the Event here: ${link}`;
  const urlText = `Link to Event Details: ${url}`;

  return `${name}\\n${description}\\n\\n${linkText}\\n\\n${urlText}`;
};

const outlookLink = ({ name, description, start, end, link }, url) => {
  const rootUrl = "https://outlook.office.com/calendar/0/deeplink/compose";

  const params = new URLSearchParams({
    path: `/calendar/action/compose`,
    rru: "addevent",
    startdt: start,
    enddt: end,
    subject: name,
    body: getEventDescriptionHTML({ name, description, link, url })
  });

  return `${rootUrl}?${params}`;
};

const gcalLink = ({ name, description, start, end, link }, url) => {
  const rootUrl = "https://calendar.google.com/calendar/render";

  const startDate = dayjs(start).format("YYYYMMDDTHHmmssZ");
  const endDate = dayjs(end).format("YYYYMMDDTHHmmssZ");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: name,
    dates: `${startDate}/${endDate}`,
    details: getEventDescriptionHTML({ name, description, link, url }),
    sprop: `website:${url}`
  });

  return `${rootUrl}?${params}`;
};

const icsFile = ({ name, description, start, end, link }, url) => {
  const startDate = dayjs(start).format("YYYYMMDDTHHmmss");
  const endDate = dayjs(end).format("YYYYMMDDTHHmmss");

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:TheDynamics
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${name}
DESCRIPTION:${getEventDescriptionText({ name, description, link, url })}
URL:${url}
END:VEVENT
END:VCALENDAR`;

  return `data:text/calendar;charset=utf8,${ics}`;
};

export function AddToCalendar({ event }) {
  const [showPopper, setShowPopper] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const [url, setUrl] = useState();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }
    ]
  });

  useEffect(() => {
    const handleClickOutside = event => {
      if (popperElement && !popperElement.contains(event.target)) {
        setShowPopper(false);
      }
    };

    if (showPopper) {
      document.addEventListener("click", handleClickOutside, false);

      return () => {
        document.removeEventListener("click", handleClickOutside, false);
      };
    }
  }, [popperElement, showPopper]);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <button
        className="md:button-big xs:button-medium button-small button-deep-sky-blue flex items-center gap-2 rounded-[3px] md:text-20px text-16px mx-auto sm:mx-0"
        ref={setReferenceElement}
        onClick={() => setShowPopper(v => !v)}>
        <CalendarIcon className="md:w-8 md:h-8 w-7 h-7" />
        <span className="">Add to my calendar</span>
      </button>
      <div
        className="popper bg-slate-50 p-2 mx-auto rounded-lg"
        ref={setPopperElement}
        style={{
          ...styles.popper
        }}
        {...attributes.popper}
        data-show={showPopper}>
        <a
          href={icsFile(event, url)}
          download={`${event.name}.ics`}
          rel="noopener noreferrer"
          className="md:outline-button-medium outline-button-small  button-deep-sky-blue bg-white  ml-2">
          <span>
            <Icon icon="mdi:apple" color="#03a9f4" inline={true} className="mr-4" />
          </span>
          Apple Calendar
        </a>
        <br />
        <a
          href={gcalLink(event, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="md:outline-button-medium outline-button-small  button-deep-sky-blue bg-white ml-2">
          <span>
            <Icon icon="mdi:google" color="#03a9f4" inline={true} className="mr-4" />
          </span>
          Google Calender
        </a>
        <br />
        <a
          href={outlookLink(event, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="md:outline-button-medium outline-button-small  button-deep-sky-blue bg-white ml-2">
          <span>
            <Icon icon="mdi:microsoft" color="#03a9f4" inline={true} className="mr-4" />
          </span>
          Outlook Calender
        </a>
        <br />
        <a
          href={icsFile(event, url)}
          download={`${event.name}.ics`}
          rel="noopener noreferrer"
          className="md:outline-button-medium outline-button-small  button-deep-sky-blue bg-white ml-2 flex items-center">
          <span>
            <Icon icon="mdi:calendar" color="#03a9f4" inline={true} className="mr-4" />
          </span>
          Other Calendars
        </a>
        <div ref={setArrowElement} style={styles.arrow} className="arrow" />
      </div>
    </>
  );
}
