import React from 'react'
import img10 from '../../components/Scrapbook/images/unsplash_TSZo17r3m0s.png'
import img11 from '../../components/Scrapbook/images/unsplash_h0HE-fhx2wg.png'

function CardsLine1b() {
  return (
    <div>
        <div className='cardsline1b'>
            <div className='name__time'>
                    <img className='img8a' src={img10} alt=''/>
                <div>
                    <p className='name'>@Belle See</p>
                    <p className='time'>6:03pm</p>
                </div>
            </div>
            <h1 className='card__body2'>
                I replaced the extruded in my 3D printer today! The pre-assembled extruders were all out of stock, so I had to buy the parts for one (which got lost in the mail, so had to place a second order…), put it together, and then pull out the old clogged extruder in the printer and replace it with the new one I assembled.

                I've always been kind of intimidated by hardware and am really proud of myself for getting this done! + bonus sunset picture from tonight
            </h1>
            <img className='img11' src={img11} alt=''/>
        </div>
    </div>
  )
}

export default CardsLine1b