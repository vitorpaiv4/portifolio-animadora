module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-pink': '#F2BDD6',
        'dark-pink': '#F2C9DC',
        'light-blue': '#B0C6D9',
        'soft-blue': '#BDE3F2',
        'soft-beige': '#F2E0DC',
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
