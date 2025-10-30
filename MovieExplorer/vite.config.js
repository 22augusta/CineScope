import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ajusta a base para caminhos relativos, evitando referências absolutas a `/assets/*`
// que podem quebrar quando o deploy é servido de um subpath ou com configuração
// específica do host. Mantemos o plugin React já presente no projeto.
export default defineConfig({
    base: './',
    plugins: [react()],
})
