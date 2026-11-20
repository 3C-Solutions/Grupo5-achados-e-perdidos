import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/itens': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // Navegação do navegador continua servindo o SPA (rotas /itens e /itens/novo).
        // Só requisições de dados (fetch) são encaminhadas ao JSON Server.
        bypass: (req) =>
          req.headers.accept?.includes('text/html') ? '/index.html' : undefined,
      },
    },
  },
})
