import React from 'react'
// import '../../components/Scrapbook/NavBar.css'
// import img1 from './images/logo.png'
// import img2 from './images/Vector (6).png'
import img3 from '../../components/Scrapbook/images/Vector (7).png'
import img4 from '../../components/Scrapbook/images/Vector (9).png'
import img1a from '../../components/Scrapbook/images/logo (1).png'

function NavBar() {

  return (
    <div className='navbar'>
        <div className='left__side'>
            <img className='img1' src={img1a} alt=''/>
            <p className='thedynamics'>The Dynamics</p>
        </div>
        <div className='right__side'>
        {/* <img className='img' src={img2} alt=''/> */}
            <img className='img3' src={img3} alt=''/>
            <div className='home'>
            <button className=''>Go back home </button>
            <img className='img4' src={img4} alt=''/>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar