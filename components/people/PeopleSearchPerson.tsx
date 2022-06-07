import { useState } from "react";

interface PeopleSearchPersonProps {
    followed?: boolean;
    hasBottomBorder?: boolean;
}

const PeopleSearchPerson : React.FC<PeopleSearchPersonProps> = ({followed, hasBottomBorder}) => {
    const [isFollowing, setIsFollowing] = useState(followed ? followed : false);
    return (
        <div style={{borderBottom : hasBottomBorder ? '1px solid #C9C9C9': '0'}} className="border-t border-[#C9C9C9] py-[28px]">
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
                    {!isFollowing && 
                    <button onClick={() => setIsFollowing(!isFollowing)} className="h-[52px] px-[30px] text-[24px] border border-[#C9C9C9] rounded-[10px]">
                        Follow
                    </button>}
                    {
                        isFollowing &&
                    <button onClick={() => setIsFollowing(!isFollowing)} className="relative left-[24px] h-[52px] bg-[#03A9F4] text-white px-[30px] text-[24px] border-[#C9C9C9] rounded-[10px]">
                        Unfollow
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default PeopleSearchPerson;