import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../componets/css/about.css';
import Technologies from '../componets/tech.js';



// import '../App.css';
import particlesOptions from "../particles.json";
import Header from "../componets/header";


const Home = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
          <Particles options={particlesOptions} init={particlesInit}/>
      
           <Header/> 
            
           
            <header >

            <div>
                <img src="https://www.yourobserver.com/sites/default/files/styles/sliders_and_planned_story_image_870x580/public/113946_standard.jpeg?itok=ghko689-" alt=""/>
            </div>




            <h1> About </h1>
            <p>Hi, my name is Jesse! I'm a Biology major who graduated from FSC.
            I have experience with researching the manatee's stomach microbiome and experience as a Teaching Assistant for the Biology Department.
                      
    After graduation I attended Dental School at LECOM. Here I decided to shift gears in my career because web development allows me to continually develop and bring amazing applications to life. It challenges my creativity in ways I didn't imagine before.
              I'm currently an aspiring web developer. I recently graduated from UCF's Web Development Bootcamp. Here are some of my projects; check them out!

In my free time, I like playing disc golf, spending time with my family and enjoying the sun during an afternoon walk.</p>
      
          
                
              
            </header>
            <Technologies/>
        </div>
    );
}

export default Home;
