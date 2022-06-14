import React from 'react'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Upwork from '../../img/Upwork.png'
import amazon from '../../img/amazon.png'
import Facebook from "../../img/Facebook.png"
import './Works.css'
import {motion} from 'framer-motion'
function Works() {
  return (
    <div className='works'>
        <div className="awesome">
            <span>Work for All these</span>
            <span>Brand & Clients</span>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iusto, rem corporis nulla dolorum quidem 
                <br/>ex laborum tenetur labore odit?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nesciunt?
                </span>
               
                <button className='button s-button'>Hire Me</button>
               
                <div className="blur blur3"></div>
               

        </div>
        {/* right-side */}
        <div className="w-right">
            <motion.div
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5,type:'spring'}}
             className="w-maincircle">
                <div className="w-secondcircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secondcircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secondcircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secondcircle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-secondcircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background circle */}
            <div className="w-backcircle bluecircle"></div>
            <div className="w-backcircle yellowcircle"></div>

        </div>
      
    </div>
  )
}

export default Works
