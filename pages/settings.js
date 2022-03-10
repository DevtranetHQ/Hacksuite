import DashNav from "../components/dash/DashNav";

export default function Settings() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/settings"/>
            </div>
            <div className="col-span-10">
                Settings
            </div>
        </div>
    );
}
