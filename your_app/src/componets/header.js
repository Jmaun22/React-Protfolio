
import "./css/header.css";
// import "./images/profil.jpeg";


const header =() => {
    return (

       <> 
         <header className="header">
         <h1 >Jesse Maun </h1>

  
   
   
        <ul className="header">
    
            <li className="header">
              
                <a href="about" className="header">About Me
                </a>
            </li>
            <li className="header">
                <a href="projects" className="header">Projects</a>
            </li>
            <li className="header">
                <a href="resume.pdf" className="header">Resume</a>
            </li>
            <li>
                <a href="contact" className="header">Contact Me</a>
            </li>
          
        </ul>
    </header>
    </>
    );
}

export default header;
