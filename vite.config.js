/** @type {import('vite').UserConfig} */

export default {
  build: {
    manifest: true,
    rollupOptions: {
      input: "web/themes/custom/stripe_landing/ts/main.ts",
      output: {
        manualChunks: () => "app",
        entryFileNames: `assets/main.js`,
        assetFileNames: `assets/main.css`,
      },
    },
    outDir: "web/themes/custom/stripe_landing/dist",
  },
};
