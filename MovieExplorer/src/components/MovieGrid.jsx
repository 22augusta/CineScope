import React from 'react'
import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ movies = [] }) {
  return (
    <section className="grid" aria-live="polite">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  )
}
