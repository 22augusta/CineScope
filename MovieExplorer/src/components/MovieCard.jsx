import React from 'react'
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie }) {
  return (
    <article className="card">
      {movie.poster_path ? (
        <img src={`${IMAGE_BASE}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div className="no-poster">Sem imagem</div>
      )}
      <h3>{movie.title}</h3>
      <p>Nota: {movie.vote_average}</p>
    </article>
  )
}
