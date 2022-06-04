import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../componets/css/projects.css';




import '../App.css';
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
           <h1>Projects</h1>
              <div className="project-container">

          
           <div className='project'>
           {/* <a>https://odisclemons.github.io/route-my-day/</a> */}
           <img src="img/route1.png" alt='yoyo'></img>
           </div>


           <div className="project">
           <img src="img/plant1.png" alt="plant1"></img>


           </div>

           <div className="project">

           <img src="img/motivated1.png" alt="mot"></img>
               {/* <a>https://agile-wildwood-01808.herokuapp.com/</a> */}
           </div>

    

  

           <div className="project">
           <img src="img/Weather1.png"></img>


           </div>
           <div className="project">
              <img src="img/Calccpu.png"></img>
           </div>

           <div>
              <img src="img/pass.png"></img>
           </div>

           </div>

 
      
    
            
           
            <header className="App-header">
         
          
                
              
            </header>
        </div>
    );
}

export default Home;