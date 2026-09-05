import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import Button from './Button.jsx'
import logo from '../assets/logo.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre nosotros' },
  { to: '/menu', label: 'Nuestro menú' },
  { to: '/experiencia-musical', label: 'Experiencia musical' },
  { to: '/ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const { menuAbierto, setMenuAbierto } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setMenuAbierto(false)}>
          <img src={logo} alt="Villa Aurora" className="navbar__logo" />
          <span>Villa Aurora</span>
        </NavLink>

        <nav className={`navbar__links ${menuAbierto ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setMenuAbierto(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__cta">
            <Button to="/menu" variant="primary">Ver menú</Button>
          </div>
        </nav>

        <button
          className={`navbar__burger ${menuAbierto ? 'is-open' : ''}`}
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}