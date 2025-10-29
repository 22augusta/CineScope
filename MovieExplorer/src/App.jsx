import React, { useEffect, useState, useRef } from 'react'
import Hero from './components/Hero.jsx'
import MovieGrid from './components/MovieGrid.jsx'
import { fetchPopularMovies, searchMovies } from './services/tmdb.js'

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const debounceRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    // Carrega populares inicialmente
    fetchPopularMovies()
      .then(data => setMovies(data.results || []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // Função chamada pelo input de busca; debounce simples
  function handleSearchInput(value) {
    setQuery(value)
    setPage(1)
    setError(null)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      performSearch(value)
    }, 400)
  }

  function performSearch(value) {
    const q = String(value || '').trim()
    if (!q) {
      // se vazia, volta aos populares
      setLoading(true)
      fetchPopularMovies()
        .then(data => setMovies(data.results || []))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
      return
    }

    setLoading(true)
    searchMovies(q)
      .then(data => setMovies(data.results || []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <div className="app-root">
      <Hero query={query} onSearch={handleSearchInput} loading={loading} />
      <main className="container">
        {loading && <p className="muted">Carregando...</p>}
        {error && <p className="error">{error}</p>}
        <MovieGrid movies={movies} />
        {!loading && !error && movies.length === 0 && (
          <p className="muted">Nenhum resultado encontrado.</p>
        )}
      </main>
    </div>
  )
}
