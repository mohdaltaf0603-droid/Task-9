import { useState } from "react";
import { Send } from "lucide-react";
import Container from "../Components/Container";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <Container>
        <div className="newsletter-wrapper">
          <div>
            <span className="section-tag">Stay Connected</span>
            <h2>Get Green Updates</h2>
            <p>Subscribe to receive our latest news and updates.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              Subscribe <Send size={17} />
            </button>

            {message && <p className="success-message">{message}</p>}
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;