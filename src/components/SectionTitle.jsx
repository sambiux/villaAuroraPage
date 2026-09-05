export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div>
      <h2 className="section-title" style={light ? { color: 'var(--cream)' } : undefined}>
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle" style={light ? { color: 'var(--teal-light)' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  )
}