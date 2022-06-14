import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import Heartemoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf' 
import {motion} from 'framer-motion'
function Services() {
  const transition={duration:1,type:'spring'}
  return (
    <div className='services' id='Services'>
        {/* leftside */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iusto, rem corporis nulla dolorum quidem 
                <br/>ex laborum tenetur labore odit?</span>
                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur blur3"></div>
               

        </div>
        {/* right-side */}
        
    <div className="cards">
    <div className="blur blur4"></div>
        <motion.div className="card1"
        initial={{left:"10rem"}}
        whileInView={{left:"16rem"}}
        transition={transition}>
        <Card emoji={Heartemoji} heading={'Design'} description={'AdobXD,Figma, Sketch,Adobphotoshop'}
        />
        </motion.div>
        <motion.div className="card2"
         initial={{left:"-15rem"}}
         whileInView={{left:"0rem"}}
         transition={transition}>
        <Card emoji={Glasses} heading={'Developer'} description={'Html,React, Css,Javascript,Nodejs,C#.net'}/>
        </motion.div>
        <motion.div className="card3"
        initial={{left:"10rem"}}
        whileInView={{left:"16rem"}}
        transition={transition}>
        <Card emoji={Humble} heading={'UI/UX'} description={'Lorem ipsum dolor, sit amet consectetur  '}/>
        
        </motion.div>
    </div>
    </div>
   
  )
}

export default Services
