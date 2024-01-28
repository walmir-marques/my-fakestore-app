module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  devServer: {
    headers: {
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
  },
};
