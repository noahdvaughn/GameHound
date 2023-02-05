import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import GameCard from '../components/GameCard'

const API_KEY = process.env.REACT_APP_RAWG_KEY

//this is used to display games of a similar genre

const ViewGames = (props) => {
  const [games, setGames] = useState([])

  let { genreId } = useParams()

  useEffect(() => {
    const getGamesByGenre = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&genres=${genreId}`
      )
      setGames(response.data.results)
    }
    getGamesByGenre()
  }, [genreId])
  console.log(games)

  return (
    <div className="container-grid">
      {games.map((result) => (
        <GameCard
          key={result.id}
          id={result.id}
          image={result.background_image}
          name={result.name}
          rating={result.rating}
        />
      ))}
    </div>
  )
}

export default ViewGames
