import React, { useState, useEffect } from 'react';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('/imagens/Concept1.png');

  useEffect(() => {
    const interval = setInterval(() => {
      if (backgroundImage === '/imagens/Concept1.png') {
        setBackgroundImage('/imagens/concept02.png');
      } else {
        setBackgroundImage('/imagens/Concept1.png');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="h-screen" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
      }}
    >
    </section>
  );
};

export default Home;
