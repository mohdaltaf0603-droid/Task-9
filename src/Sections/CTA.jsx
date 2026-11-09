import { ArrowUpRight } from "lucide-react";
import Container from "../Components/Container";

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <Container>
        <div className="cta-content">
          <span>Let's Grow Together</span>

          <h2>
            Make Your World
            <br />
            A Little More Green.
          </h2>

          <p>
            Start your journey towards a natural and sustainable lifestyle.
          </p>

          <a href="mailto:hello@greendy.com" className="btn btn-light">
            Contact Us <ArrowUpRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default CTA;