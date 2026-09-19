import Button from './Button.jsx'
import './Hero.css'
import imgPrincipalSalon from "../assets/imgPrincipal.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            Sabores de nuestra tierra,<br />música para compartir.
          </h1>
          <p className="hero__desc">
            Disfruta nuestras picadas, almuerzos y el ambiente familiar de Villa Aurora,
            en el barrio Modelo Norte de Bogotá.
          </p>
          <div className="hero__actions">
            <Button to="/menu" variant="primary">Conoce nuestros platos</Button>
            <Button to="/sobre-nosotros" variant="outline">Conoce el restaurante</Button>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__frame placeholder-img">
            <img src={imgPrincipalSalon} alt="imgSalon" />
          </div>
        </div>
      </div>
    </section>
  )
}