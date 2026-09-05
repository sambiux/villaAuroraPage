import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'primary', children, onClick, type = 'button' }) {
  const className = `btn btn-${variant}`

  if (to) return <Link to={to} className={className}>{children}</Link>
  if (href) return <a href={href} className={className}>{children}</a>
  return <button type={type} className={className} onClick={onClick}>{children}</button>
}