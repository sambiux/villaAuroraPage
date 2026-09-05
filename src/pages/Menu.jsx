import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import FoodCard from '../components/FoodCard.jsx'
import { picadas, sopasYAlmuerzos } from '../data/menu.js'
import './Menu.css'

const tabs = [
  { id: 'picadas', label: 'Picadas' },
  { id: 'sopas', label: 'Sopas y almuerzos' },
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState('picadas')

  return (
    <section className="section container">
      <SectionTitle title="Nuestro menú" subtitle="Preparaciones caseras, pensadas para compartir." />

      <div className="menu-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`menu-tab ${activeTab === t.id ? 'is-active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'picadas' && (
        <div className="grid-3">
          {picadas.map((p) => <FoodCard key={p.id} {...p} />)}
        </div>
      )}

      {activeTab === 'sopas' && (
        <div className="grid-3">
          {sopasYAlmuerzos.map((p) => <FoodCard key={p.id} {...p} />)}
        </div>
      )}
    </section>
  )
}