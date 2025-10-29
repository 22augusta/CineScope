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

4. Deploy no Vercel (opcional)

- Ao criar o projeto no Vercel, aponte o Root Directory para `MovieExplorer`.
- Build Command: `npm run build`
- Output Directory: `dist`
- Adicione as variáveis de ambiente (`VITE_TMDB_API_KEY` e/ou `VITE_TMDB_V4`) em Settings → Environment Variables.

Exemplo via CLI (opcional):

```bash
# dentro de MovieExplorer
npx vercel --prod
# ou para adicionar env via CLI
vercel env add VITE_TMDB_API_KEY production
```

Observação de segurança
- Variáveis que começam com `VITE_` são expostas ao bundle do cliente. Para manter segredos privados, crie um backend ou função serverless que faça proxy para a API do TMDB.

Arquivo de exemplo
- Copie `.env.example` para `.env` e substitua pelos seus valores antes de rodar localmente.

