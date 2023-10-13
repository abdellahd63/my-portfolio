import React from 'react'
import './Style/Home.css'

import azcodes from './assets/azcodes.png'
import {BsLinkedin,BsGithub,BsInstagram, BsDiscord} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

function Home (){
  return (
    <section class="main" id='Home'>
      <div>
        <img src={azcodes}/>
        <h2>
          Hi, I'm Abdallah Dekkiche,<br />
          <span className='test'>Mobile & Web Developer</span>
        </h2>
        <a href="#myproject" class="viewproject_btn">View my projects</a>
        <div class="socialmedia">
          <a href="https://www.linkedin.com/in/abdallah-dekkiche-8a921b252/"><i><BsLinkedin className='icon' fill='#fff' /></i></a>
          <a href="https://github.com/abdellahd63" className='middle'><i><BsGithub className='icon'  fill='#fff' /></i></a>
          <a href="https://www.instagram.com/adcodes360/"><i><BsInstagram className='icon'  fill='#fff' /></i></a>
        </div>
      </div>
    </section>
  )
}

export default Home