const Contact = () => {
  return (
    <section className="py-16 bg-pastel-blue text-gray-800"> {/* Fundo pastel */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-pastel-dark-blue">Entre em Contato</h2> {/* Texto em tons pastéis */}
        <form className="mt-8 max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Seu Nome" 
            className="w-full p-4 rounded-lg mb-4 bg-pastel-light-blue text-gray-700" 
          />
          <input 
            type="email" 
            placeholder="Seu E-mail" 
            className="w-full p-4 rounded-lg mb-4 bg-pastel-light-blue text-gray-700" 
          />
          <textarea 
            placeholder="Sua Mensagem" 
            className="w-full p-4 rounded-lg mb-4 bg-pastel-light-blue text-gray-700" 
          ></textarea>
          <button className="bg-pastel-pink text-white font-bold py-2 px-4 rounded-full hover:bg-pastel-light-pink">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
