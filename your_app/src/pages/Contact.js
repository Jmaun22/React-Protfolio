import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



import '../App.css';
import particlesOptions from "../particles.json";
import Header from "../componets/header";

import Contact from "../componets/contact.js";

const Home = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
          <Particles options={particlesOptions} init={particlesInit}/>
      
           <Header/> 
            
           
            <header className="App-header">
            <Contact/>
   
          
                
              
            </header>
        </div>
    );
}

export default Home;
