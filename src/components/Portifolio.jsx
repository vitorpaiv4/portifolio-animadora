const Portfolio = () => {
  const projects = [
    { title: 'Broches Artísticos', img: '/imagens/broches.png', category: ' Ilustração' },
    { title: 'Caderno Rosa', img: '/imagens/caderno-rosa.png', category: ' Design Gráfico' },
    { title: 'Concept Art 1', img: '/imagens/concept02.png', category: ' Concept Art' },
    { title: 'Probo Model Sheet', img: '/imagens/probo01.png', category: ' Animação' },
    { title: 'Personagem Snow', img: '/imagens/snow.png', category: ' Concept Art' },
    { title: 'Personagem Zen', img: '/imagens/zen.png', category: 'Ilustração' },
    { title: 'Caderno Wish', img: '/imagens/caderno wish.png', category: 'Design Gráfico' },
    { title: 'Teste de Cor', img: '/imagens/teste-de-cor-patins.png', category: 'Ilustração' },
    { title: 'Ecobag', img: '/imagens/ecobag.png', category: ' Concept Art' },
  ];

  return (
    <section id="portfolio" className="py-16 bg-pastel-blue text-gray-800"> {/* Fundo pastel */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-pastel-dark-blue text-center mb-8">Portfólio</h2> {/* Título estilizado */}
        
        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg">
              {/* Link que abre a imagem em uma nova aba */}
              <a href={project.img} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                {/* Sobreposição ao passar o mouse */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-white">{project.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Botão que navega para a seção Serviços */}
        <div className="text-center mt-8">
         
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
