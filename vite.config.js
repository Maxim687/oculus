import { defineConfig } from "vite";
import { resolve } from "node:path";
import { createHtmlPlugin } from "vite-plugin-html";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const root = process.cwd();
const ejsOptions = { root: [root] };

const pages = [
  {
    filename: "index.html",
    template: "index.html",
    injectOptions: { ejsOptions },
  },
  {
    filename: "about.html",
    template: "about.html",
    injectOptions: { ejsOptions },
  },
];

export default defineConfig({
  publicDir: "public",
  base: "oculus",

  plugins: [
    createHtmlPlugin({
      minify: true,
      pages,
    }),

    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
      },
      output: {
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";
          if (/\.(css)$/.test(name)) {
            return "css/[name]-[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name)) {
            return "assets/img/[name]-[hash][extname]";
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    cssMinify: true,
    minify: "esbuild",
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  preview: {
    port: 4173,
    open: true,
  },
});
