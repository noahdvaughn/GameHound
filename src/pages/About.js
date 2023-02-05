const About = () => {
  return (
    <div className="aboutDiv">
      <h1 className="aboutText">
        Game Hound is a React-built app that uses the RAWG API to sniff out
        games that the user wants to fetch and retrieves the game info to the
        user for a treat. Built on week 4 of the General Assembly Software
        Immersive program. In other words - "bark bark woof yip yip sniff sniff"
      </h1>
      <div className="socialLinks">
        <a href="https://github.com/noahdvaughn">
          <img
            src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2b4584429ff7662.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/noahvaughn/">
          <img
            src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/0baeb31aedf8e64.png"
            alt=""
          />
        </a>
      </div>
    </div>
  )
}

export default About
