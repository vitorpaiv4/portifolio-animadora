const Contact = () => {
    return (
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{"Entre em Contato"}</h2>
          <form className="mt-8 max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Seu Nome" className="w-full p-4 rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" />
            <input type="email" placeholder="Seu Email" className="w-full p-4 rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" />
            <textarea placeholder="Sua Mensagem" className="w-full p-4 rounded-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"></textarea>
            <button className="bg-white text-teal-500 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">{"Enviar Mensagem"}</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;