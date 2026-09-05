import SectionTitle from '../components/SectionTitle.jsx'
import './About.css'

export default function About() {
  return (
    <section className="section container about">
      <SectionTitle title="Sobre nosotros" />

      <div className="about__editorial">
        <div className="about__img placeholder-img">Imagen: Ricardo e Irma</div>
        <div className="about__text">
          <p>
            Villa Aurora es un restaurante familiar ubicado en el barrio Modelo Norte de Bogotá.
            Nació como un emprendimiento familiar de Ricardo Montiel e Irma Gonzales, un matrimonio
            que decidió compartir con su comunidad la comida típica y las preparaciones caseras
            que los caracterizan.
          </p>
          <p>
            Desde el principio, la idea ha sido ofrecer algo más que un menú: un espacio donde
            las familias y los amigos puedan reunirse, compartir una picada o un almuerzo, y disfrutar
            de un ambiente cercano y agradable.
          </p>
        </div>
      </div>

      <div className="about__quote">
        <p>“Más que una comida, un momento para compartir.”</p>
      </div>
    </section>
  )
}