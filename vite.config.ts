import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages:
  // If this is deployed to a root-domain repository such as username.github.io,
  // keep base as "/". If the repository is not a root-domain repository,
  // change it to "/仓库名/" before building and deploying.
  base: "/",
});
