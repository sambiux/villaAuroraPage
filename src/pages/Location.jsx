import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import './Location.css'

export default function Location() {
  return (
    <section className="section container">
      <SectionTitle title="Ubicación" subtitle="Visítanos en el barrio Modelo Norte de Bogotá." />
      <div className="location__layout">
        <div className="location__map placeholder-img">
          Espacio para integrar Google Maps
        </div>
        <div className="location__info">
          <h3>Dirección</h3>
          <p>[Dirección exacta — placeholder editable]</p>
          <h3>Horarios</h3>
          <p>[Horarios — placeholder editable]</p>
          <Button href="#" variant="primary">Cómo llegar</Button>
        </div>
      </div>
    </section>
  )
}