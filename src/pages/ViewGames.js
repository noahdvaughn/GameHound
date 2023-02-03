import { useState } from 'react'

//this is used to display games of a similar genre

const ViewGames = (props) => {
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {}

  return <div className="container-grid"></div>
}

export default ViewGames
