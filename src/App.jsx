
import React, { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <> 
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {""}
    <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-cream text-brown-100`}
      >
        <NavBar />

    </div> 
    </>
  );
}

export default App;
