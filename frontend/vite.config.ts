import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "",
    base: env.VITE_BASE_URL,
    server: {
      host: true,
      port: 8080,
    },
  };
});
