import { Star } from "lucide-react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import { testimonialsData } from "../data/testimonialsData";

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <Container>
        <SectionTitle
          tag="Testimonials"
          title={<>What Our Customers <span>Say</span></>}
          center
        />

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p>"{item.review}"</p>

              <div className="customer">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;