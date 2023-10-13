import React from 'react'
import './Style/NavBar.css'
import {useRef} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState, useEffect, } from 'react'





const NavBar = () => {

  const NavRef=useRef();
  const {toogle} = useState(true);
  const shownavbar=()=>{
    NavRef.current.classList.toggle("responsive_nav");
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  
  return (
    
    <header className='navbar'>
        
         <nav className={`nav-menu ${scrolled ? 'scrolled' : ''}`} ref={NavRef}>
            
            <a href='#Home'>Home</a>

            <a href='#aboutme'>About me</a>

            <a href='#myskills'>My skills</a>

            <a href='#myproject'>My Projects</a>

            <a href='#contact'>Contact</a>

            <button className="nav-btn nav-close-btn" onClick={shownavbar}><FaTimes fill='#fff' size={40}/></button>
          </nav>
          <button className="nav-btn" onClick={shownavbar} ><FaBars fill='#fff' size={40}/></button>
    </header>
  )
}

export default NavBar