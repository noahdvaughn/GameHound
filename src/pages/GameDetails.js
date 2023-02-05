import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_RAWG_KEY

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()
  console.log(gameId)

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      )
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [gameId])

  console.log(gameDetails)

  return (
    <div className="game-content">
      <h1 style={{ textAlign: 'center' }}>{gameDetails.name}</h1>
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>Release date: {gameDetails.released}</p>
          <p>Metacritic Score: {gameDetails.metacritic}</p>
          <p>User Rating: {gameDetails.rating}</p>
        </div>
        <div>
          <h3>{gameDetails.description_raw}</h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
