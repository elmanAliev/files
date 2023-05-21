import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    server: {
        open: true,
    },
    plugins: [
        svgr({ exportAsDefault: true }),
        react()
    ],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});
