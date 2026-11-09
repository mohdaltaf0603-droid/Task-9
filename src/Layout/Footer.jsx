import { Leaf } from "lucide-react";
import Container from "../Components/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <Leaf size={27} />
              <span>Green<span className="logo-highlight">dy.</span></span>
            </a>

            <p>
              Bringing nature closer to you through sustainable
              solutions and natural living.
            </p>

            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">Fb</a>
              <a href="https://instagram.com" aria-label="Instagram">Ig</a>
              <a href="https://linkedin.com" aria-label="LinkedIn">In</a>
              <a href="https://twitter.com" aria-label="Twitter">X</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
          </div>

          <div>
            <h4>Our Services</h4>
            <a href="#services">Organic Gardening</a>
            <a href="#services">Eco Solutions</a>
            <a href="#services">Plant Care</a>
            <a href="#features">Natural Living</a>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>Email: hello@greendy.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: Green Street, Nature City</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Greendy. All rights reserved.</p>
          <p>Designed with love for nature.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;