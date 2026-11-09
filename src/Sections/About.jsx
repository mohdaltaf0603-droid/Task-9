import { Leaf, Sprout, Recycle } from "lucide-react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import aboutImage from "../assets/Who we are.png";

function About() {
  return (
    <section className="section about" id="about">
      <Container>
        <div className="about-grid">
          <div className="about-image">
            <img
              src={aboutImage}
              alt="Green plants and nature"
            />
            <div className="about-badge">
              <Leaf size={30} />
              <strong>100% Natural</strong>
            </div>
          </div>

          <div className="about-content">
            <SectionTitle
              tag="About Greendy"
              title={<>Making The World <span>Greener</span> Every Day</>}
              description="We believe that a healthy planet starts with small, meaningful changes. Our mission is to make sustainable living simple, accessible and enjoyable."
            />

            <div className="about-points">
              <div>
                <Sprout />
                <div>
                  <h4>Natural Living</h4>
                  <p>Better choices for a healthier lifestyle.</p>
                </div>
              </div>

              <div>
                <Recycle />
                <div>
                  <h4>Eco Friendly</h4>
                  <p>Responsible solutions for our planet.</p>
                </div>
              </div>
            </div>

            <Button href="#services">Discover More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;