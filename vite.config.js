export default {
  build: {
    manifest: true,
    rollupOptions: {
      input: "web/themes/custom/stripe_landing/js/main.js",
      output: {
        manualChunks: () => "app",
        entryFileNames: `assets/main.js`,
        assetFileNames: `assets/main.css`,
      },
    },
    outDir: "web/themes/custom/stripe_landing/dist",
  },
};
