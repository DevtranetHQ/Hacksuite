import React from 'react'
// import './App.css';
import NavBar from './NavBar'
import SlantSection from './SlantSection';
import Cards from './Cards';
import Footer from './Footer';
import img2 from './images/Vector (6).png'


// function App() {
//   // add state
//   const [darkTheme, setDarkTheme] = React.useState(false)
//   // rest remains same
// }

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
    <div className={darkTheme ? 'dark__app' : 'App'}>
      <NavBar />
      <img onClick={() => setDarkTheme(prevTheme => !prevTheme)}  className='img2' src={img2} alt=''/>
      <SlantSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
