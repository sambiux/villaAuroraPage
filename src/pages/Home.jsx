import Hero from '../components/Hero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import FoodCard from '../components/FoodCard.jsx'
import ImageCarousel from '../components/ImageCarousel.jsx'
import Button from '../components/Button.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'
import imgFamilia from "../assets/imgFamilia.jpeg";
import imgPicada from "../assets/imgPicada.jpeg";
import imgSalon from "../assets/imgSalon.jpeg";
import imgCanto from "../assets/imgCanto.png";
import { categorias, picadas } from '../data/menu.js'
import './Home.css'

function Reveal({ children }) {
  const [ref, visible] = useScrollAnimation()
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>{children}</div>
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section container">
        <Reveal>
          <div className="presentation">
            <div className="presentation__text">
              <SectionTitle title="Un restaurante familiar" />
              <p>
                En Villa Aurora creemos que una buena comida se disfruta mejor cuando se comparte.
                Somos un restaurante familiar que ofrece sabores tradicionales, preparaciones caseras
                y un ambiente pensado para disfrutar con quienes más queremos.
              </p>
            </div>
            <div className="presentation__img placeholder-img">Imagen: comida colombiana</div>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal>
          <SectionTitle title="Nuestros sabores" subtitle="Tres formas de disfrutar la cocina de Villa Aurora." />
          <div className="grid-3">
            {categorias.map((cat) => (
              <CategoryCard key={cat.id} nombre={cat.nombre} descripcion={cat.descripcion} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="experience-band">
        <div className="container">
          <Reveal>
            <SectionTitle title="Una experiencia para compartir" light />
            <p className="experience-band__text">
              Ven a disfrutar de una buena comida, compartir con tu familia y vivir una experiencia diferente.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <SectionTitle title="Conoce nuestro menú" subtitle="Algunos de nuestros platos más representativos." />
          <div className="grid-3">
            {picadas.map((p) => (
              <FoodCard key={p.id} {...p} />
            ))}
          </div>
          <div className="section-cta">
            <Button to="/menu" variant="primary">Ver todo el menú</Button>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal>
          <SectionTitle title="Momentos en Villa Aurora" />
          <ImageCarousel slides={[imgSalon, imgPicada, imgCanto, imgFamilia]} />
        </Reveal>
      </section>

      <section className="section container">
        <Reveal>
          <SectionTitle title="¿Por qué elegir Villa Aurora?" />
          <div className="why-grid">
            {[
              'Comida típica y preparaciones caseras',
              'Ambiente familiar',
              'Espacio para compartir',
              'Experiencia musical en vivo',
              'Atención cercana',
            ].map((item) => (
              <div key={item} className="why-item">{item}</div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}