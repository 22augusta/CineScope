const BASE = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_V4

export async function fetchPopularMovies() {
  const res = await fetch(`${BASE}/movie/popular?language=pt-BR`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  if (!res.ok) throw new Error('Erro ao buscar filmes')
  return res.json()
}
