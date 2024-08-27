module.exports = {
  content: [
    "./public/**/*.html", // Public dizinindeki tüm HTML dosyaları
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Src dizinindeki tüm Vue, JS, TS, JSX, TSX dosyaları
    "./components/**/*.{vue,js}", // Özel bileşenler dizini
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
