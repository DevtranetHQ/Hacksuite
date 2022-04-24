import { useState, useEffect } from "react";
import { usePopper } from "react-popper";
import dayjs from "dayjs";
import CalendarIcon from "./../icons/Calendar";

const outlookLink = ({ name, description, start, end }, url) => {
    const rootUrl = "https://outlook.office.com/calendar/0/deeplink/compose";

    const params = new URLSearchParams({
        path: `/calendar/action/compose`,
        rru: "addevent",
        startdt: start,
        enddt: end,
        subject: name,
        body: `<h2>${name}</h2>${description}<br><br><strong>Link to Event: <a href="${url}">${url}</a>`
    });

    return `${rootUrl}?${params}`;
};

const gcalLink = ({ name, description, start, end }, url) => {
    const rootUrl = "https://calendar.google.com/calendar/render";

    const startDate = dayjs(start).format("YYYYMMDDTHHmmSSZ");
    const endDate = dayjs(end).format("YYYYMMDDTHHmmSSZ");

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: name,
        dates: `${startDate}/${endDate}`,
        details: `<h2>${name}</h2>${description}<br><br><strong>Link to Event: <a href="${url}">${url}</a>`,
        sprop: `website:${url}`
    });

    return `${rootUrl}?${params}`;
};

const icsFile = ({ name, description, start, end }, url) => {
    const startDate = dayjs(start).format("YYYYMMDDTHHmmss");
    const endDate = dayjs(end).format("YYYYMMDDTHHmmss");

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:TheDynamics
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${name}
DESCRIPTION:${description}
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
                className="button-big button-deep-sky-blue inline-flex gap-2 rounded-[4.65px] text-24px h-[54px]"
                ref={setReferenceElement}
                onClick={() => setShowPopper(v => !v)}>
                <CalendarIcon width={32} height={32} />
                <span className="pt-2">Add to my calendar</span>
            </button>
            <div
                className="popper"
                ref={setPopperElement}
                style={{
                    ...styles.popper
                }}
                {...attributes.popper}
                data-show={showPopper}>
                <a href={gcalLink(event, url)} target="_blank" rel="noopener noreferrer">
                    Google Calendar
                </a>
                <br />
                <a href={outlookLink(event, url)} target="_blank" rel="noopener noreferrer">
                    Outlook
                </a>
                <br />
                <a
                    href={icsFile(event, url)}
                    download={`${event.name}.ics`}
                    rel="noopener noreferrer">
                    iCal
                </a>
                <div ref={setArrowElement} style={styles.arrow} className="arrow" />
            </div>
        </>
    );
}
