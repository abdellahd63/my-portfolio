import React from 'react'
import './Style/MyServices.css'
import app from './assets/app.jpg'
import web from './assets/web.jpg'

import Tahwissa from './assets/tahwissa.png'



import CoinCountapp from './assets/CoinCountapp.jpg'
import CoinCountweb from './assets/Coincountweb.jpg'
import Sonelgazp1 from './assets/sonelgazp1.jpeg'
import Sonelgazp2 from './assets/sonelgazp2.jpeg'
import ImageSlider from './ImageSlider'

import firebase from './assets/firebaseicon.png'
import Figmalogo from './assets/figmaicon.png'
import Androidlogo from './assets/androidlogo.png'
import javalogo from './assets/javalogo.png'
import mysql from './assets/Mysal.png'
import Css from './assets/cssicon.png'
import vscode from './assets/vscodeicon.png'
import fluttericon from './assets/flutterlogo.png'
import react from './assets/reactjsn.png'
import html from './assets/html.png'
import nodejs from './assets/nodejs.png'
import mongodb from './assets/mongodb.png'
import python from './assets/python.png'










function MyServices(){

  const sliderDataCoincount = [
    {
      image:CoinCountapp,
    },

    {
      image:CoinCountweb,
    }
    
  ];


  const sliderDataPalmary = [
    {
      image:app,
    },

    {
      image:web,
    }
    
  ];


  const sliderDatasonelgaz = [
    {
      image:Sonelgazp1,
    },

    {
      image:Sonelgazp2,
    }
    
  ];

  return (
    <section className='Myservices-section' id='myproject'>
    <h2>My Projects</h2>
   <div className='Services'>
   <div className='Service-section'>
   <div className='ProjectCard'>
      <ImageSlider slides={sliderDataPalmary}/>

    </div>



        <div className='service-section-text'>
            <h1 className='test'>1. Recommendation systeme for palmary</h1>
            <p>Product Recommendation System Based on Machine Learning,<br/>
            integrated with a sleek mobile/web application for stores that we developed.</p>

            <div className='projectskills'>
              <img src={Figmalogo} width={35} height={35}/>
              <img src={react}width={35} height={35}/>
              <img src={javalogo} width={35} height={35}/>
              <img src={Androidlogo} width={35} height={35}/>
              <img src={python} width={35} height={35}/>
              <img src={nodejs}width={35} height={35}/>
              <img src={firebase} width={35} height={35}/>
              <img src={vscode} width={35} height={35}/>
            </div>
        </div>
    </div>


    <div className='Service-section'>


        <div className='ProjectCard'>
      <div className='slider-container'>
    
          <ImageSlider slides={sliderDataCoincount}/>
        
      </div>
      

    </div>
        <div className='service-section-text'>
            <h1 className='test'>2. A credit card and expense management system</h1>
            <p>Creation of a user-friendly smart wallet management platform. <br/>
              This platform provided a wide array of tools to help users effectively <br/> 
              manage their finances in a single location. What made it truly special was its <br/>
              ability to offer personalized financial advice based on the individual's <br/> 
              spending habits and financial objectives, all powered by AI. </p>

            <div className='projectskills'>
               <img src={Figmalogo} width={35} height={35}/>
              <img src={react}width={35} height={35}/>
              <img src={javalogo} width={35} height={35}/>
              <img src={Androidlogo} width={35} height={35}/>
              <img src={nodejs}width={35} height={35}/>
              <img src={python} width={35} height={35}/>
              <img src={mysql} width={35} height={35}/>
              <img src={vscode} width={35} height={35}/>
            </div>
        </div>
    </div>


    <div className='Service-section'>
        <div className='ProjectCard'>
          <img src={Tahwissa}  className='projectimage'/>
        </div>
        <div className='service-section-text'>
            <h1 className='test'>3. Tahwissa App</h1>
            <p> Tahwissa app, offers user-generated reviews ,<br/> 
            ratings, and recommendations for restaurants, hotels, attractions worldwide. <br/>
            It's a valuable resource for travelers looking for Places.<br/>
            </p>

            <div className='projectskills'>
              <img src={Figmalogo} width={35} height={35}/>
              <img src={javalogo} width={35} height={35}/>
              <img src={Androidlogo} width={35} height={35}/>
              <img src={firebase} width={35} height={35}/>
            </div>
        </div>
    </div>



    <div className='Service-section'>


        <div className='ProjectCard'>
      <div className='slider-container'>
    
          <ImageSlider slides={sliderDatasonelgaz}/>
        
      </div>
      

    </div>
        <div className='service-section-text'>
            <h1 className='test'>4. digitizing and tracking meter readings  (Sonelgaz)</h1>
            <p>I had the opportunity to develop a system  for digitizing and<br/>
               tracking meter readings for Sonelgaz. <br/>
              This system consists of a web administration site and an application  <br/> for meter
              readers.<br/>
              Our system has the following objectives:<br/>
                -Track and manage meter readings in real-time.<br/>
                -Maintain a record of all entries.<br/> </p>

            <div className='projectskills'>
              <img src={Figmalogo} width={35} height={35}/>
              <img src={html}width={35} height={35}/>
              <img src={Css}width={35} height={35}/>
              <img src={javalogo} width={35} height={35}/>
              <img src={Androidlogo} width={35} height={35}/>
              <img src={nodejs}width={35} height={35}/>
              <img src={mongodb} width={35} height={35}/>
            </div>
        </div>
    </div>


  

    
   </div>
</section>
  )
}

export default MyServices