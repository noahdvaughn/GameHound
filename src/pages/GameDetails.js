import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams

  useEffect(() => {
    let selectedGame = ''
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
