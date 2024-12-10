import React from 'react';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
       <Navbar />
       <LandingPage />
       <Marquee />
       <About />
       <Eyes />
       <Feature />
       <Footer />
    </div>
   
  )
}

export default App;