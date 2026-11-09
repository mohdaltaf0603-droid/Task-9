import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import Container from "../Components/Container";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Container>
        <div className="nav-wrapper">
          <a href="#home" className="logo">
            <Leaf size={27} />
            <span>Green<span className="logo-highlight">dy.</span></span>
          </a>

          <nav className={`nav-links ${open ? "active" : ""}`}>
            {links.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-button">
            Get Started
          </a>

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;