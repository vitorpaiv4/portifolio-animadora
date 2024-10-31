const Footer = () => {
  return (
    <footer className="py-8 bg-pastel-blue text-gray-800 flex justify-center items-center">  {/* Fundo pastel e texto cinza escuro */}
      <div className="container mx-auto flex items-center justify-center">
        <img src="/imagens/sprite-parada.gif" alt="Sprite Parada" className="w-24 h-24 mr-4" /> {/* Gif sprite-parada */}
        <p className="text-xl font-bold text-pastel-dark-blue"> {/* Estilo da fonte melhorado */}
          © 2024 Laiana Carpenedo. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
