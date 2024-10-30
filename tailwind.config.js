module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-pink': '#F2BDD6',
        'dark-pink': '#F2C9DC',
        'light-blue': '#B0C6D9',
        'soft-blue': '#BDE3F2',
        'soft-beige': '#F2E0DC',
        'pastel-blue': '#A7C7E7',
        'pastel-light-blue': '#D4E6F1',
        'pastel-pink': '#F7C6D5',
        'pastel-light-pink': '#FADADD',
        'pastel-dark-blue': '#6A8EAE',
      },
      animation: {
        'rotate': 'rotate 5s infinite alternate',
        'bounce': 'bounce 3s infinite alternate',
      },
    },
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Garante que Tailwind verifica os componentes
  ],
  plugins: [],
};
