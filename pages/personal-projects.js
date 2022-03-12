import DashNav from "../components/dash/DashNav";

export default function PersonalProjects() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <DashNav active="/personal-projects" />
            </div>
            <div className="col-span-10">Personal Projects</div>
        </div>
    );
}
