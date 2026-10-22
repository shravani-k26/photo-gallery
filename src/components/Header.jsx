import './Header.css'

function Header() {
  return (
    <header className="gallery-header">
      <a
        className="gallery-header-brand"
        href="/"
        aria-label="Photo Gallery home"
      >
        <span className="gallery-header-brand-icon">P</span>

        <span>
          Photo<span className="gallery-header-brand-accent">Gallery</span>
        </span>
      </a>

      <span className="gallery-header-tagline">
        Discover beautiful moments
      </span>
    </header>
  )
}

export default Header
