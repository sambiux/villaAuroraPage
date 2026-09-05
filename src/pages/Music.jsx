import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import { generosMusicales } from '../data/menu.js'
import './Music.css'

export default function Music() {
  return (
    <section className="music">
      <div className="container">
        <SectionTitle title="Experiencia musical" light />
        <div className="music__layout">
          <div className="music__img placeholder-img">Imagen: micrófono / presentación</div>
          <div>
            <p className="music__text">
              En Villa Aurora también compartimos nuestra pasión por la música. Ricardo e Irma,
              además de estar detrás de este restaurante familiar, disfrutan regalar momentos
              especiales a nuestros visitantes a través del canto.
            </p>
            <p className="music__note">
              Las presentaciones se realizan cuando el restaurante no está tan concurrido —
              no se garantizan en un horario específico.
            </p>
            <div className="music__genres">
              {generosMusicales.map((g) => (
                <span key={g} className="music__genre">{g}</span>
              ))}
            </div>
            <Button to="/ubicacion" variant="violet">Ven a compartir un momento especial</Button>
          </div>
        </div>
      </div>
    </section>
  )
}