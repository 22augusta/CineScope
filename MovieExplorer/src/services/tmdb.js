const BASE = 'https://api.themoviedb.org/3'

// Preferência por VITE_TMDB_API_KEY (v3 key) exposta no cliente via query string.
// Se você estiver usando um token v4 (bearer) ajuste a variável VITE_TMDB_V4.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const V4_TOKEN = import.meta.env.VITE_TMDB_V4

function buildUrl(path, params = {}) {
  const url = new URL(`${BASE}${path}`)
  // parâmetros padrão
  url.searchParams.set('language', 'pt-BR')
  Object.entries(params).forEach(([k, v]) => {
    if (v != null) url.searchParams.set(k, v)
  })
  // se houver API_KEY (v3) adiciona como query param
  if (API_KEY) url.searchParams.set('api_key', API_KEY)
  return url.toString()
}

async function request(path, { params, useV4 = false } = {}) {
  const url = buildUrl(path, params)
  const headers = { 'Content-Type': 'application/json;charset=utf-8' }
  // se pediu uso do V4 e houver token, adiciona header Authorization
  if (useV4 && V4_TOKEN) headers.Authorization = `Bearer ${V4_TOKEN}`

  const res = await fetch(url, { headers })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Erro TMDB: ${res.status} ${res.statusText} ${text}`)
  }
  return res.json()
}

// Lista de filmes populares
export function fetchPopularMovies(page = 1) {
  return request('/movie/popular', { params: { page } })
}

// Busca por query (filmes e séries) — tipo pode ser 'movie' ou 'tv'
export function searchMovies(query, page = 1, type = 'movie') {
  if (!query || String(query).trim() === '') return Promise.resolve({ results: [], page: 1, total_results: 0 })
  return request(`/search/${type}`, { params: { query, page } })
}

// Detalhes de um item (filme ou série)
export function fetchMovieDetails(id, type = 'movie') {
  if (!id) return Promise.reject(new Error('ID obrigatório'))
  return request(`/${type}/${id}`)
}

// Se nenhum método de autenticação estiver configurado, avisa no console
if (!API_KEY && !V4_TOKEN) {
  // não lançamos erro para não quebrar builds; apenas informamos ao desenvolvedor
  // Em produção, defina VITE_TMDB_API_KEY no Netlify (ou VITE_TMDB_V4 se usar bearer)
  // Ex: VITE_TMDB_API_KEY=your_v3_key
  // Nota: chaves expostas no cliente ficam visíveis — use backend se precisar de segredo.
  // eslint-disable-next-line no-console
  console.warn('Nenhuma chave TMDB encontrada: defina VITE_TMDB_API_KEY ou VITE_TMDB_V4')
}
