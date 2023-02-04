import { Link } from 'react-router-dom'

const GenreCard = ({image, onClick, name, gamesCount, id }) => {

  return (
    <Link to={`/ViewGames/${id}`}>
      <div className="card" onClick={onClick}>
      <div className="img-wrapper"  alt="Game Image">
      <img src={image} alt='Game Poster'/>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gamesCount}</p>
      </div>
    </div>
    
    </Link>
  )
}

export default GenreCard
