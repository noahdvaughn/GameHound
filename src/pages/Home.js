import { useEffect, useState } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import Search from '../components/Search'
const API_KEY = process.env.REACT_APP_RAWG_KEY

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const gameResponse = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
    )
    setSearchResults(gameResponse.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      )
      setGenres(response.data.results)
    }
    getGenres()
  }, [])

  let display = searched ? (
    <div className="search">
      <h2>Search Results</h2>
      <section className="search-results container-grid">
        {searchResults.map((result) => (
          <GameCard
            key={result.id}
            id={result.id}
            image={result.background_image}
            name={result.name}
            rating={result.rating}
          />
        ))}
      </section>
    </div>
  ) : (
    <div className="genres">
      <h2>Genres</h2>
      <section className="container-grid">
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            name={genre.name}
            image={genre.image_background}
            gamesCount={genre.games_count}
            id={genre.id}
          />
        ))}
      </section>
    </div>
  )
  return (
    <div>
      <Search
        onChange={handleChange}
        getSearchResults={getSearchResults}
        value={searchQuery}
      />
      {display}
    </div>
  )
}

export default Home
