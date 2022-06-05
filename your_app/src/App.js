
import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
import Contact from './pages/Contact.js';
  
function App() {
return (
    <Router>
    {/* <Navbar /> */}
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
       <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/sign-up' element={<SignUp/>} />   */}
    </Routes>
    </Router>
);
}
  
export default App;