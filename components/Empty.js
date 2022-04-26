import React from 'react'

function Empty() {
    return (
        <div className='flex flex-col relative dark:bg-black border-[10px] border-[#C4C4C4] rounded-lg items-center justify-center mx-auto md:h-[400px] md:w-[1200px] w-[370px] h-[271px]'>
            <p className='text-[#A5A5A5] dark:text-white font-bold font-body md:text-[72px] text-[24px] mb-3 '>
                WOW, SUCH EMPTY!</p>
                <img src="/assets/emptyFace.svg" alt="Empty" className='md-h-52 md:w-52 h-24 w-24 '/>
        </div>
    )
}

export default Empty