# MovieExplorer

Pequeno webapp que lista filmes populares e permite busca (TMDB).

Como rodar localmente

1. Copie `.env.example` para `.env` e adicione sua chave TMDB (VITE_TMDB_API_KEY ou VITE_TMDB_V4):

```env
VITE_TMDB_API_KEY=your_v3_key_here
# ou
VITE_TMDB_V4=your_v4_bearer_token_here
```

2. Instale dependências e rode em modo desenvolvimento:

```bash
cd MovieExplorer
npm install
npx vite
```

3. Para build e deploy (Netlify):

- Build command: `npm run build`
- Publish directory: `dist`
- Configure `VITE_TMDB_API_KEY` em Site settings → Build & deploy → Environment
