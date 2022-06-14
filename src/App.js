// import logo from './logo.svg';
 import { useContext } from 'react';
import './App.css';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/Footer';
import Intro from './Component/Into/Intro';

import Navbar from "./Component/Navbar/Navbar";
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import Testimonial from './Component/Testimonial/Testimonial';
import Works from './Component/Works/Works';
import {themeContext} from './Context'
function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode?'black':'',
            color:darkMode?'white':''}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
