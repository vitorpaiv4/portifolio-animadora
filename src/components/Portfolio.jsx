const Portfolio = () => {
    const projects = [
      { title: 'Project 1', img: '/project1.jpg', category: 'Animation' },
      { title: 'Project 2', img: '/project2.jpg', category: 'Illustration' },
      // Add more projects here
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  