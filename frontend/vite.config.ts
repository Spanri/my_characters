import { defineConfig, loadEnv } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "",
    base: env.VITE_BASE_URL,
    rewriteUrls: 'all',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./public/"),
        "~@": path.resolve(__dirname, "./public/"),
      },
    },
    server: {
      host: true,
      port: 8080,
    },
  };
});
