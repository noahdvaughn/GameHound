const GenreCard = ({image, onClick, name, gamesCount }) => {

  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper"  alt="Game Image">
      <img src={image} alt='Game Poster'/>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
