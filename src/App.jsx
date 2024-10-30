import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Servicos from './components/Servicos';
import Layout from './components/Layout';

function App() {
  return (
    <div className="text-black">
      <Layout/>
      <Home/>
      <About/>
     <Servicos/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
