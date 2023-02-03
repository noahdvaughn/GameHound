import './styles/App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import Search from './components/Search'

const API_KEY = process.env.REACT_APP_RAWG_KEY

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/About" element={About} />
          <Route path="/GameDetails" element={GameDetails} />
          <Route path="/ViewGames" element={ViewGames} />
        </Routes>
      </main>
    </div>
  )
}

export default App
