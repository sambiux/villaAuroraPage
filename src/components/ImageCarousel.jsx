import { useEffect, useState, useCallback } from 'react'
import './ImageCarousel.css'


export default function ImageCarousel({ slides = [] }) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  if (!slides.length) return null

  return (
    <div className="carousel">
      <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((img, i) => (
          <div key={i} className="carousel__slide placeholder-img">
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Imagen anterior">‹</button>
      <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Imagen siguiente">›</button>

      <div className="carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}