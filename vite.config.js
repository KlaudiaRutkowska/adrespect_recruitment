import { defineConfig } from "vite"
import { compression } from 'vite-plugin-compression2'
import path from "path"

export default defineConfig({
    base: "/adrespect_recruitment",
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true
    },
    plugins: [
        compression()
    ]
})