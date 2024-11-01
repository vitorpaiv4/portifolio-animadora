import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portifolio';
import Layout from './components/Layout';
import Services from './components/Services'; 

function App() {
  return (
    <div className="text-black">
      <Layout/>
      <Home/>
      <About/>
      <Services/>
     <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
