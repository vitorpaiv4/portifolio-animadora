import React from 'react';

const Home = () => {
    return (
      <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url('/path-to-hero-image.jpg')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg md:text-2xl">Animator | Illustrator | Designer | Finalist</p>
            <button className="mt-8 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full">
              Explore My Work
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;