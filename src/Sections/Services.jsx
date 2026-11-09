import { ArrowUpRight } from "lucide-react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import { servicesData } from "../data/servicesData";

function Services() {
  return (
    <section className="section services" id="services">
      <Container>
        <SectionTitle
          tag="Our Services"
          title={<>Everything For A <span>Greener</span> Tomorrow</>}
          description="Explore our nature-inspired services."
          center
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <span>{service.number}</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Explore ${service.title}`}>
                  Explore <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;