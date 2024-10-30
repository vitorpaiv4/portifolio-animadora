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
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Portfólio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-white">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
