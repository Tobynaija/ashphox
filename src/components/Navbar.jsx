
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Building2
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      {/* COMPANY LOGO */}
      <a href="#home" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <Building2 size={28} />
        </div>

        <div className="logo-text">
          ASPHOX
          <span>ENGINEERING CONSULT LTD</span>
        </div>
      </a>

      {/* NAVIGATION */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      {/* CTA */}
      <a href="#contact" className="nav-cta">
        Get a Quote <ArrowUpRight size={17} />
      </a>

      {/* MOBILE MENU */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </header>
  );
}

export default Navbar;
