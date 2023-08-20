import { defineConfig } from "vite"
import compress from "vite-plugin-compress"

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [
        compress()
    ]
})