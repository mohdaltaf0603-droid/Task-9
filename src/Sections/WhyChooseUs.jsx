import { CheckCircle2, Heart } from "lucide-react";
import Container from "../Components/Container";
import whyImage from "../assets/Why is choose us.png";

function WhyChooseUs() {
  const benefits = [
    "Environmentally responsible solutions",
    "High-quality natural products",
    "Customer-focused service",
    "Committed to a greener future",
  ];

  return (
    <section className="section why-us">
      <Container>
        <div className="why-grid">
          <div className="why-content">
            <span className="section-tag">Why Greendy?</span>

            <h2>
              Small Changes.
              <br />
              <span>Big Impact.</span>
            </h2>

            <p>
              We make it easier to choose a lifestyle that
              supports nature, protects resources and creates
              a healthier future.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="why-image">
            <img
              src={whyImage}
              alt="Beautiful natural forest"
            />

            <div className="why-floating">
              <Heart size={24} />
              <span>Love Nature. Protect Earth.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;