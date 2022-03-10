import styles from "./Notification.module.css";

export default function Notification({ unread, type, title, description, who, time }) {
    let theme;
    if (type === "Workshop") {
        theme = "fruit-salad";
    }

    return (
        <div className="border-b-2 p-5">
            <div className="grid grid-cols-2">
            </div>
            <button className={`button-medium button-${theme}`} disabled>{type}</button>
            <div className="mb-2">
                <h2 className="subheadline">{title}</h2>
                <p className="sm">{description}</p>
            </div>
            <p className={`font-bold sm text-${theme}`}>{who}</p>
        </div>
    );
}
