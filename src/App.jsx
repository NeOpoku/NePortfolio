
import React, { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
//import { footer } from './components/sections/footer'
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <> 
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {""}
    <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-cream text-brown-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
       
  
    </div> 
    </>
  );
}

export default App;
