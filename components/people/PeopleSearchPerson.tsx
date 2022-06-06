const PeopleSearchPerson = () => {
    return (
        <div className="border-t border-b border-[#C9C9C9] py-[28px]">
            <div className="max-w-[950px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex gap-[18px] items-center">
                        <figure className="w-[80px] h-[83px]">
                            <img className="w-full h-full object-cover" src="/assets/TEST/people.png" />
                        </figure>
                        <div className="flex flex-col">
                            <p className="text-[36px] leading-[40px] font-semibold">Zach Latta</p>
                            <p className="text-[#2D2D2D] text-[20px]">Software Engineer, Google</p>
                        </div>
                    </div>
                    <button className="h-[52px] px-[30px] text-[24px] border border-[#C9C9C9] rounded-[10px]">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PeopleSearchPerson;