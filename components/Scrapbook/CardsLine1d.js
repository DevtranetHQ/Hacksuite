import React from 'react'
import img15 from '../../components/Scrapbook/images/download (1) 6.png'
import img16 from '../../components/Scrapbook/images/unsplash_W7b3eDUb_2I.png'

function CardsLine1d() {
  return (
    <div>
        <div className='cardsline1d'>
            <div className='name__time'>
            <img className='img8b' src={img16} alt=''/>
                <div>
                    <p className='name'>@Elytgy</p>
                    <p className='time'>January 1, 2021</p>
                </div>
            </div>
            <h1 className='card__body3e'>
            Can’t believe I just got into MIT btw, guess who has a date with Elon Musk later today.
            </h1>
            <img className='img15' src={img15} alt=''/>
        </div>
    </div>
  )
}

export default CardsLine1d