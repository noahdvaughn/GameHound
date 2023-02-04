import { Link } from 'react-router-dom'


const GameCard = ({onClick, image, name, rating, id}) => {
  

  return (
    <Link to={`/GameDetails/${id}`}>
    <div className="card game-card" onClick={onClick}>
      <div className="img-wrapper" >
        <img src={image} alt='Game Image'/>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{rating}</p>
      </div>
    </div>
    </Link>
  )
}

export default GameCard
