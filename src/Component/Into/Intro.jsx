import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Glassimoji from '../../img/glassesimoji.png'
import Thumb from '../../img/thumbup.png'
import Floatingdiv from '../Floatingdiv/Floatingdiv'
import {motion} from 'framer-motion'

function Intro() {
  const transition={duration:2,type:'spring'}
  return (
    <div className='intro'>
      <div className="i-left">
          <div className="i-name">
          <span>HY! I Am</span>
          <span>Mathew</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto cupiditate non enim sed vitae quas commodi nam sequi reprehenderit.</span>
      </div>  
      <button className='button i-button'>Hire me</button>
      <div className="i-icons">
        <a href=""><img src={Github} alt="" /></a>
        <a href=""> <img src={Linkedin} alt="" /></a> 
        <a href=""> <img src={Instagram} alt="" /></a>
          
      </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img 
        initial={{left:"-36%"}}
        whileInView={{left:"-24%"}}
        transition={transition}
        src={Glassimoji} alt="" />
        <motion.div className='floatingdiv-crown'
         initial={{top:"-4%",left:'74%'}}
         whileInView={{left:"65%"}}
         transition={transition}
        >
            <Floatingdiv image={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>
        <motion.div className='floatingdiv-Thumb'
        initial={{top:"20rem",left:'9rem'}}
        whileInView={{left:"2rem",top:'20rem'}}
        transition={transition}
        >
            <Floatingdiv image={Thumb} txt1="Best Design" txt2="Award"/>
        </motion.div>
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>


        

      </div>
    </div>
  )
}

export default Intro
