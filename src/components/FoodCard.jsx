import { formatearPrecio } from '../data/menu.js'
import './FoodCard.css'

export default function FoodCard({ nombre, descripcion, precio, imagen }) {
  return (
    <article className="food-card">
      <div className="food-card__img placeholder-img">Imagen: {nombre}</div>
      <div className="food-card__body">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="food-card__footer">
          <span className="food-card__price">{formatearPrecio(precio)}</span>
          {precio === null && (
            <button className="btn btn-outline food-card__btn">Consultar disponibilidad</button>
          )}
        </div>
      </div>
    </article>
  )
}