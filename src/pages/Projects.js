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
                    <h3>Route My Day</h3>
                    <p>🛣️ Plan your day traveling!!</p>
                    <a href="https://odisclemons.github.io/route-my-day/">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 

                </div>


                <div className="project">
                    <img src="img/plant1.png" alt="plant1"></img>
                    <h3>Plant-a-Plant</h3>
                    <p>🪴 Plan your home garden!!</p>
                    <a href="https://agile-wildwood-01808.herokuapp.com/">
                    <button className='checkit-out'>Check it out!!</button>
                    </a> 


                </div>

                <div className="project">

                    <img src="img/motivated1.png" alt="mot"></img>
                    <h3>Motivated</h3>
                    {/* <a>https://agile-wildwood-01808.herokuapp.com/</a> */}
                    <p>🏆 Achieve your goals!</p>
                    <button className='checkit-out'>Check it out!!</button>
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
                        <img src="img/Calccpu.png"></img>
                        <h3>Calculator</h3>
                        <p>💻 A calculator!!</p>
                        <a href="https://jmaun22.github.io/weather-API/">
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