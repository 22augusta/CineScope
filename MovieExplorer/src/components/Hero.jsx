import React from 'react'

export default function Hero({ query, onSearch, loading }) {
  return (
    <header className="hero">
      <div className="hero-inner container">
        <div>
          <h1>MovieExplorer</h1>
          <p>Descubra filmes e séries populares. Layout limpo e responsivo.</p>
        </div>

        <form
          className="search"
          onSubmit={e => {
            e.preventDefault()
            // submit handled by controlled input (onSearch via change)
          }}
        >
          <input
            aria-label="Buscar filmes"
            type="search"
            placeholder="Buscar filme ou série..."
            value={query}
            onChange={e => onSearch(e.target.value)}
            disabled={loading}
          />
        </form>
      </div>
    </header>
  )
}
