import { ArrowUpRight, Leaf, Sprout } from "lucide-react";
import Container from "../Components/Container";
import Button from "../Components/Button";
import heroImage from "../assets/Hero - Section - 1.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-tag">
              <Leaf size={16} />
              Grow Naturally, Live Better
            </span>

            <h1>
              Bring Nature
              <br />
              Into Your <span>Life.</span>
            </h1>

            <p>
              Discover a greener lifestyle with sustainable
              solutions and natural products designed to make
              your world healthier and more beautiful.
            </p>

            <div className="hero-actions">
              <Button href="#services">Explore More</Button>

              <a href="#about" className="text-link">
                Learn More <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>100%</h3>
                <span>Natural</span>
              </div>

              <div>
                <h3>500+</h3>
                <span>Happy Customers</span>
              </div>

              <div>
                <h3>50+</h3>
                <span>Green Solutions</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Beautiful green plants"
              className="hero-image"
            />

            <div className="hero-floating-card">
              <Sprout size={28} />
              <div>
                <strong>Go Green</strong>
                <span>Make a Difference</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;