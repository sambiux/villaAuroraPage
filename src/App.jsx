import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Music from './pages/Music.jsx'
import Location from './pages/Location.jsx'

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/experiencia-musical" element={<Music />} />
          <Route path="/ubicacion" element={<Location />} />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  )
}