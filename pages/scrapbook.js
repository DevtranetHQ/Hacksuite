import React from 'react'
// import './App.css';
import App from '../components/Scrapbook/App';
// import NavBar from '../components/Scrapbook/NavBar'
// import SlantSection from '../components/Scrapbook/SlantSection';
// import Cards from '../components/Scrapbook/Cards';
// import Footer from '../components/Scrapbook/Footer';
// import img2 from '../../components/Scrapbook/images/Vector (6).png'


// // function App() {
// //   // add state
// //   const [darkTheme, setDarkTheme] = React.useState(false)
// //   // rest remains same
// // }

// function Scrapbook() {
//   const [darkTheme, setDarkTheme] = React.useState(false)
//   return (
//     <div className={darkTheme ? 'dark__app' : 'App'}>
//       <NavBar />
//       <img onClick={() => setDarkTheme(prevTheme => !prevTheme)}  className='img2' src={img2} alt=''/>
//       <SlantSection />
//       <Cards />
//       <Footer />
//     </div>
//   );
// }

// export default Scrapbook;


export default function Scrapbook() {
  return <div> <App />
  </div>;
}
