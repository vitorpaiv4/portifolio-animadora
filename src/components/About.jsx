const About = () => {
  return (
    <section 
      className="py-16 text-gray-800" 
      style={{ 
        backgroundImage: 'url(/imagens/fundo.jpg)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl amatic-sc-bold text-center mb-8" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>Sobre o Artista</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/4">
            <img 
              src="/imagens/file.png" 
              alt="Artista" 
              className="rounded-lg w-full  animate-bounce" 
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
            <p className="text-2xl amatic-sc-bold text-purple-600" style={{ fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>
              Sou uma artista especializada em animação 2D, ilustração e design gráfico. Ao longo da última década, trabalhei em uma ampla variedade de projetos criativos que exploram cores vibrantes e personagens únicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
