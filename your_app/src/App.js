import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



import './App.css';
import particlesOptions from "./particles.json";
import Header from "./componets/header";
import Type from "./componets/typewritter";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
          <Particles options={particlesOptions} init={particlesInit}/>
      
           <Header/> 
            
           
            <header className="App-header">
            <Type/>  
          
                
              
            </header>
        </div>
    );
}

export default App;
