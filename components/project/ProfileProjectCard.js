export default function ProfileProjectCard({ ...props }) {
    const { date, image, title, desc, tags, likes, comments } = props;
    return (
        <div className="w-[720px] h-[400px] flex bg-[#f8fbff] flex-col rounded-xl overflow-hidden p-3 shadow-xl">
            {/* ====== #TOP SECTION */}
            <div className="w-full h-1/6 bg-blue-900">
                <h1>top section</h1>
            </div>

            {/* ====== #IMAGE */}
            <div className="w-full h-3/6 bg-blue-400 flex items-center justify-center">
                <h1>Image section</h1>
            </div>

            {/* ====== #TEXT SECTION */}
            <div className="w-full h-1/6 bg-blue-600"></div>

            {/* ====== #BOTTOM SECTION */}
            <div className="w-full h-1/6 bg-orange-900"></div>
        </div>
    );
}
