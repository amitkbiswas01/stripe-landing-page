export default {
  build: {
    manifest: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: "web/themes/custom/stripe_landing/js/main.js",
      output: {
        manualChunks: undefined,
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: "web/themes/custom/stripe_landing/dist",
  },
};
