import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../componets/css/projects.css';




import '../App.css';
import particlesOptions from "../particles.json";
import Header from "../componets/header";
import { Link } from 'react-router-dom';


const Home = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />

            <Header />
            <h1 className="projectHeader">Projects</h1>


            <div className="project-container">


                <div className='project'>
                    {/* <a>https://odisclemons.github.io/route-my-day/</a> */}
                    <img src="img/route1.png" alt='yoyo'></img>
                    <h3>Map My Route</h3>
                    <p>🛣️ Plan your day traveling!!</p>
                    <a href="https://jmaun22.github.io/route-my-day/">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 

                </div>


                <div className="project">
                    <img src="img/cfucalc.jpg" alt="plant1"></img>
                    <h3>CFU Calculator</h3>
                    <p>🧫 Calculate your cfus!!</p>
                    <a href="https://apps.apple.com/us/app/cfu-calculator/id1638715715">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 


                </div>

             


            </div>



            <div className="project-container">
             
                    <div className="project">
                        <img src="img/Weather1.png"></img>
                        <h3>Weather App</h3>
                        <p>☁️ Find your current weather!!</p>
                        <a href="https://jmaun22.github.io/weather-API/">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 
                       


                    </div>
                    <div className="project">
                        <img src="img/quickcards.jpg"></img>
                        <h3>Quickards</h3>
                        <p>📚 Digital flashcards!!</p>
                        <a href="https://apps.apple.com/us/app/quickards/id6444228466?platform=iphone">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 
                    </div>

                    <div className='project'>
                        <img src="img/pass.png"></img>
                        <h3>Password Generator</h3>
                        <p>🔑 A password generator!!</p>
                        <a href="https://jmaun22.github.io/password_Generator/">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 
                    </div>
              

            </div>






            <header className="App-header">




            </header>
        </div>
    );
}

export default Home;