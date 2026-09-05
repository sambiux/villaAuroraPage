import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Villa Aurora" className="footer__logo" />
          <div>
            <h3>Villa Aurora</h3>
            <p>Comida típica, picadas y música en vivo, en el corazón de Modelo Norte.</p>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
            <li><Link to="/menu">Nuestro menú</Link></li>
            <li><Link to="/experiencia-musical">Experiencia musical</Link></li>
            <li><Link to="/ubicacion">Ubicación</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Visítanos</h4>
          <p>Barrio Modelo Norte, Bogotá<br />[Dirección exacta — placeholder]</p>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <p>Teléfono: [placeholder]</p>
          <p>Horarios: [placeholder]</p>
          <div className="footer__social">
            [ Redes sociales — placeholder ]
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Villa Aurora. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}