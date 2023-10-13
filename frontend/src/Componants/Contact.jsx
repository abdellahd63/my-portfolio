import React from 'react'
import './Style/Contact.css'
import {BsLinkedin,BsGithub,BsInstagram, BsDiscord, BsMailbox} from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'


const Contact = () => {
  return (
    <section className='Contact-section' id='myproject'>
    <h2>Contact</h2>

    <p>Do you appreciate my work and are you interested in collaborating with me? <br/>
    You can reach out to me through email, Discord, or LinkedIn.
    </p>

    <div className='buttonsct'>


        <div className="box">

            <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpKspXSCvVXvSfbBXDFSPMwMvJNnqTdCPKrlMMjkZwqlVWldmJrbkCGmqqXzvCGBJndWM'>
                <div className='contact-btn Gbtn' >
                    <SiGmail className='contactbtnicon Gbtn Gmail' />
                    <h6 className='Email-title Gbtn'>E-mail</h6>
                </div>

            </a>
        </div>


        <div className="box">

            <a href='https://www.linkedin.com/in/abdallah-dekkiche-8a921b252/'>
               <div className='contact-btn LINBTN'>
            
                <BsLinkedin className='contactbtnicon LINBTN linkedin' />
                <h6 className='linkedin-title LINBTN'>LinkedIn</h6>
             </div> 
            </a>
            
        </div>

      

        <div className="box">
            <a href='https://www.instagram.com/adcodes360/'>
                <div className='contact-btn insbtn'>
                    <BsInstagram className='contactbtnicon insbtn Instagram' />
                    <h6 className='Instagram-title insbtn'>Instagram</h6>
                </div>
            </a>
            
        </div>
    </div>
    </section>
  )
}

export default Contact