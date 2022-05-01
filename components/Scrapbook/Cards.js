import React from 'react'
import CardsLine1 from '../../components/Scrapbook/CardsLine1'
// import '../../components/Scrapbook/Cards.css'
import CardsLine2 from '../../components/Scrapbook/CardsLine2'
import CardsLine3 from '../../components/Scrapbook/CardsLine3'
import CardsLine4 from '../../components/Scrapbook/CardsLine4'


function Cards() {
  return (
    <div className='cards'>
        <CardsLine1 />
        <CardsLine2/>
        <CardsLine3 />
        <CardsLine4 />
    </div>
  )
}

export default Cards