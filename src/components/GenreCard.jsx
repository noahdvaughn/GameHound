const GenreCard = ({image, onClick, name, gamesCount, }) => {

  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper" src={image} alt="Game Image">

      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
