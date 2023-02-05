import { Link } from 'react-router-dom'
const Header = () => {



  return (
    <header>
        <p className='projectTitle'>Game Hound</p>
        <img  className ='hound' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6da62d5-9811-4f21-856f-435b8c7328b9/d75aals-382bbd06-02bd-4b46-9766-d6e25e2d7f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZGE2MmQ1LTk4MTEtNGYyMS04NTZmLTQzNWI4YzczMjhiOVwvZDc1YWFscy0zODJiYmQwNi0wMmJkLTRiNDYtOTc2Ni1kNmUyNWUyZDdmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0whltT4sNbzaDI4dakyH_-d-L-NSv7VAyb0w8ptTcX4'/>
        <p className='woof'>-"woof"</p>
      <nav className='nav'>
        
        
        
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
      </nav>
    </header>
  )
}

export default Header
