import React, { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import MovieGrid from './components/MovieGrid.jsx'
import { fetchPopularMovies } from './services/tmdb.js'

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPopularMovies()
      .then(data => setMovies(data.results || []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app-root">
      <Hero />
      <main className="container">
        {loading && <p>Carregando filmes...</p>}
        {error && <p>{error}</p>}
        <MovieGrid movies={movies} />
      </main>
    </div>
  )
}
