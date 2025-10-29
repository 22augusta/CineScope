# CineScope — MovieExplorer

Este repositório contém um webapp simples (React + Vite) chamado MovieExplorer que consome a API pública The Movie Database (TMDB) para listar e buscar filmes e séries.

Estrutura relevante:
- `MovieExplorer/` — código fonte do app (index.html, src/, styles.css)

Principais comandos (dentro de `MovieExplorer`):

```bash
# instalar dependências (se ainda não instaladas)
npm install

# rodar em dev (hot-reload)
npx vite

# build de produção
npx vite build

# preview do build
npx vite preview
```

Variáveis de ambiente (defina no Netlify ou localmente em `.env`):
- `VITE_TMDB_API_KEY` — chave pública v3 (aparecerá no cliente como query param)
- `VITE_TMDB_V4` — token Bearer v4 (opcional, usado via header)

Deploy recomendado:
- Conecte este repositório ao Netlify e configure o comando de build `npm run build` no diretório `MovieExplorer` (ou use `npx vite build --root MovieExplorer`). Defina a variável `VITE_TMDB_API_KEY` nas Environment variables do Netlify.

Observações de segurança:
- Chaves expostas no cliente (VITE_*) ficam visíveis para qualquer usuário. Para proteger segredos, crie um backend que proxie as requisições ao TMDB.
# CineScope
Meu Primeiro WebApp Conectado e Deployado

Resumo

App React (Vite) responsivo no padrão portfólio. Consome TMDB (filmes populares) usando o token v4 (Bearer). Layout com hero (nome do app) + grid de cards, responsivo e pronto para deploy no Vercel.

Nome do app no hero: MovieExplorer
