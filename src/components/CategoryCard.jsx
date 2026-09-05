import Button from './Button.jsx'
import './CategoryCard.css'

export default function CategoryCard({ nombre, descripcion }) {
  return (
    <div className="category-card">
      <div className="category-card__img placeholder-img">Imagen: {nombre}</div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <Button to="/menu" variant="outline">Ver menú</Button>
    </div>
  )
}