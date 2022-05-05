import React from 'react'
import img8 from '../../components/Scrapbook/images/zach 4.png'
import img9 from '../../components/Scrapbook/images/unsplash_vXInUOv1n84.png'

function CardsLine1a() {
  return (
    <div>
         <div className='cardsline1a'>
            <div className='name__time'>
                    <img className='img8' src={img8} alt=''/>
                <div>
                    <p className='name'>@Zach Latta</p>
                    <p className='time'>12:00 pm</p>
                </div>
            </div>
            <h1 className='card__body'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
                 old. Thanks to <span className='mention'>@Eni4sure</span> for the help in <span className='mention2'>#coding-help</span> today

                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                 of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                 the cites of the word in classical literature, <span className='member'>https://fakwebsite.com/1234/lie</span>  discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit ame

            </h1>
            <img className='img9' src={img9} alt=''/>
        </div>
    </div>
  )
}

export default CardsLine1a