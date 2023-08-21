import { defineConfig } from "vite"
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [
        compression()
    ]
})