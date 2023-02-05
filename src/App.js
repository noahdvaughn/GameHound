import './styles/App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/GameDetails" element={<GameDetails />} />
          <Route path="/ViewGames/:genreId" element={<ViewGames />} />
          <Route path="/GameDetails/:gameId" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
