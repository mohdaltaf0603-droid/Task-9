import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import { featuresData } from "../data/featuresData";

function Features() {
  return (
    <section className="section features" id="features">
      <Container>
        <SectionTitle
          tag="Our Features"
          title={<>Why Choose A <span>Greener</span> Lifestyle?</>}
          description="Discover the difference that natural and sustainable choices can make."
          center
        />

        <div className="features-grid">
          {featuresData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Features;