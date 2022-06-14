import React from 'react'
// import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <h2 className='n-name'>Mathew</h2>
        {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} >
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                   
                    <li>Services</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Experience'>
                    <li>Experience</li>
                    </Link>
                  <Link spy={true} smooth={true} to='Portfolio'>
                  
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} smooth={true} to='Testmonials'>
                    <li>Testmonials</li>

                    </Link>

                </ul>
            </div>
            <Link spy={true} smooth={true} to='Contact'>
            <button className='button n-button'>Contact</button>

            </Link>
        </div> 
      
    </div>
  )
}

export default Navbar
