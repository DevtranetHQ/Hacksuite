import React from 'react'
import img10 from '../../components/Scrapbook/images/unsplash_TSZo17r3m0s.png'
// import img11 from './images/unsplash_h0HE-fhx2wg.png'
import img12 from '../../components/Scrapbook/images/unsplash_cvBBO4PzWPg.png'
import img13 from '../../components/Scrapbook/images/unsplash_ieic5Tq8YMk.png'
import img14 from '../../components/Scrapbook/images/unsplash_hpjSkU2UYSU.png'

function CardsLine1c() {
  return (
    <div>
         <div className='cardsline1c'>
            <div className='name__time'>
                    <img className='img8' src={img10} alt=''/>
                <div>
                    <p className='name'>@D’phenomenal</p>
                    <p className='time'>January 2, 2021</p>
                </div>
            </div>
           <h1 className='card__body3'>
            Earliert today <span className='mention'>@Elytgy, @Bonsai</span> and I created this wordle game clone together in
             <span className='mantion2'>#game-dev</span> <br></br>  <br></br> we only changed this small code 
            <h2 className='card__body3a'>
                .nav-link-home::before 
                content: "Javier's ";

            </h2>in the footer and we kinda duplicated this too 
            <span className='card__body3b'>
             Pseudo-Element
            </span>
            </h1>
            <div className='class__c__image'>
              <img className='img12' src={img12} alt=''/>
              <img className='img13' src={img13} alt=''/>
            </div>
              <img className='img14' src={img14} alt=''/>
        </div>
    </div>
  )
}

export default CardsLine1c