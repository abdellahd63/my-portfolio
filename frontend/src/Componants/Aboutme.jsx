import React from 'react'
import './Style/Aboutme.css'
import {CgProfile} from'react-icons/cg'
import{FaReact,FaNodeJs} from'react-icons/fa6'
import{BiLogoJava,BiLogoFlutter,BiLogoVisualStudio,BiLogoFigma,BiLogoFirebase,BiLogoMongodb,BiLogoCss3}from'react-icons/bi'

import {BsAndroid2} from 'react-icons/bs'
import {SiMysql,SiAdobeillustrator,} from'react-icons/si'


import firebase from './assets/firebaseicon.png'
import Figmalogo from './assets/figmaicon.png'
import Androidlogo from './assets/androidlogo.png'
import javalogo from './assets/javalogo.png'
import Aiicon from './assets/Illustratoricon.png'
import mysql from './assets/Mysal.png'
import Css from './assets/cssicon.png'
import vscode from './assets/vscodeicon.png'
import fluttericon from './assets/flutterlogo.png'
import react from './assets/reactjsn.png'
import html from './assets/html.png'
import nodejs from './assets/nodejs.png'
import mongodb from './assets/mongodb.png'
import portfoliophoto from './assets/PORTFOLIOPHOTO.png'


function Aboutme(){
  return (
    <section className='Aboutme-section' id='aboutme'>
        
        <div className='profil-section'>
          <div className='Photop'>
            <img src={portfoliophoto} height={400} />
          </div>
            <div className='profil-section-text'>
            <h2 >About me</h2>
                <p>Hi , I’m Abdallah DEKKICHE, currently Mater 1 software engineering <br/>
                student at  University of SAAD DAHLEB BLIDA 1 .<br/>
                I’m mobile application & web developer , Ui UX designer always looking <br/>
                for new experiences and greater challenges.</p>
            </div>
        </div>
        <h2 >My Skills</h2>
        <div className='skils-section'>
            
            <img src={react}className='icon' width={55} height={55}/>
            <img src={nodejs}className='icon' width={55} height={55}/>
            <img src={html}className='icon' width={55} height={55}/>
            <img src={fluttericon} className='icon' width={55} height={55}/>
            <img src={vscode} className='icon' width={55} height={55}/>

            <img src={mongodb}className='icon' width={55} height={55}/>
            <img src={Css}className='icon' width={55} height={55}/>
            <img src={Aiicon} className='icon' width={55} height={55}/>
            <img src={mysql} className='icon' width={55} height={55}/>

            <img src={javalogo}className='icon' width={55} height={55}/>
            <img src={Androidlogo}className='icon' width={55} height={55}/>
            <img src={Figmalogo} className='icon' width={55} height={55}/>
            <img src={firebase} className='icon' width={55} height={55}/>



        </div>
    </section>
  )
}

export default Aboutme