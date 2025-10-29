import React from 'react'
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie }) {
  const title = movie.title || movie.name || 'Sem título'
  const poster = movie.poster_path || movie.backdrop_path

  return (
    <article className="card" aria-label={title}>
      {poster ? (
        <img src={`${IMAGE_BASE}${poster}`} alt={title} loading="lazy" />
      ) : (
        <div className="no-poster">Sem imagem</div>
      )}
      <div className="card-body">
        <h3>{title}</h3>
        <p className="rating">Nota: {movie.vote_average ?? '—'}</p>
      </div>
    </article>
  )
}
