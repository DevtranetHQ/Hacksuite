export default function DisplayDate({ date, show }) {
    const dateString = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    const timeString = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
    });

    return (
        <>
            {show.includes("date") && <>{dateString}</>}{" "}
            {show.includes("time") && <>{timeString}</>}
        </>
    );
}
