
import "./css/header.css";
// import "./images/profil.jpeg";


const header =() => {
    return (

       <> 
         <header className="header">
         <h1 >Jesse Maun </h1>

  
   
   
        <ul className="header">
    
            <li className="header">
              
                <a href="#aboutme" className="header">About Me
                </a>
            </li>
            <li className="header">
                <a href="#work" className="header">Projects</a>
            </li>
            <li className="header">
                <a href="https://docs.google.com/document/d/1-mGG8axQ1bcxLg4e2mdDjSaXXV9o34Syjy2F8czjwoM/edit?usp=sharing" className="header">Resume</a>
            </li>
            <li>
                <a href="#contactme" className="header">Contact Me</a>
            </li>
          
        </ul>
    </header>
    </>
    );
}

export default header;
