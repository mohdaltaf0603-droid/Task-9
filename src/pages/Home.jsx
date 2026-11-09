import { useState } from "react";
import Header from "../assets/Header (4).png";
import HeaderOpen from "../assets/Header (5).png";
import OpenMenu from "../assets/Frame 46 (1).png";
import CheckupModal from "../assets/Group 108.png";
import CompanyLogo from "../assets/Company logo.png";
import Hero from "../assets/Hero - Section - 1.png";
import WhoWeAre from "../assets/Who we are.png";
import Numbers from "../assets/Number insight - Black.png";
import WhatWeDo from "../assets/What we do.png";
import Strategy from "../assets/Strategy.png";
import WhyChooseUs from "../assets/Why is choose us.png";
import Testimonial from "../assets/Testimonial.png";
import Blog from "../assets/Blog.png";
import Newsletter from "../assets/Newsletter (1).png";
import Footer from "../assets/Footer - 2.png";

const sections = [
  { id: "companies", src: CompanyLogo, alt: "Trusted companies" },
  { id: "home", src: Hero, alt: "Award winning digital marketing agency introduction" },
  { id: "about", src: WhoWeAre, alt: "Who we are section" },
  { id: "numbers", src: Numbers, alt: "The proofs are in the numbers" },
  { id: "services", src: WhatWeDo, alt: "What we do and our marketing services" },
  { id: "strategy", src: Strategy, alt: "Our proven strategy for growing your sales" },
  { id: "why-us", src: WhyChooseUs, alt: "Why ecommerce and startup companies choose us" },
  { id: "testimonials", src: Testimonial, alt: "Client testimonial" },
  { id: "blog", src: Blog, alt: "Marketing strategy articles" },
  { id: "newsletter", src: Newsletter, alt: "Newsletter signup" },
  { id: "contact", src: Footer, alt: "Greendy footer and contact information" },
];

const menuLinks = [
  { label: "Who we are", target: "about", top: 16 },
  { label: "What we do", target: "services", top: 83 },
  { label: "Reviews", target: "testimonials", top: 150 },
  { label: "Blog", target: "blog", top: 217 },
];

const serviceOptions = [
  { label: "Design", image: Strategy, description: "Create and develop your brand." },
  { label: "Digital Advertising", image: Blog, description: "Grow your online visibility." },
  { label: "SEO", image: WhyChooseUs, description: "Improve your website position." },
  { label: "Social Media", image: WhoWeAre, description: "Manage and grow your social media." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkupOpen, setCheckupOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(null);

  return (
    <div className="figma-mobile-page">
      <header className="figma-header">
        <img src={Header} alt="Greendy navigation" />
        <button
          className="header-menu-button"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        />
      </header>

      <main>
        {sections.map((section) => (
          <section className="figma-image-section" id={section.id} key={section.src}>
            <img src={section.src} alt={section.alt} />
          </section>
        ))}
      </main>

      {menuOpen && (
        <div className="figma-menu" role="dialog" aria-label="Navigation menu">
          <img className="figma-menu-header" src={HeaderOpen} alt="Close navigation" />
          <img className="figma-menu-content" src={OpenMenu} alt="Navigation links" />
          <nav className="figma-menu-links" aria-label="Main navigation">
            {menuLinks.map((link) => (
              <a
                href={`#${link.target}`}
                key={link.target}
                style={{ top: link.top }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {serviceOptions.map((service, index) => (
              <button
                type="button"
                className="service-hotspot"
                style={{ top: 90 + index * 69 }}
                key={service.label}
                aria-label={`Open ${service.label} details`}
                onClick={() => {
                  setMenuOpen(false);
                  setServiceOpen(service);
                }}
              />
            ))}
            <a
              href="#checkup"
              className="checkup-link"
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                setCheckupOpen(true);
              }}
            >
              Get your free website review
            </a>
          </nav>
          <button
            className="menu-close-button"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {checkupOpen && (
        <div className="checkup-modal" role="dialog" aria-label="Free website checkup">
          <img src={CheckupModal} alt="Get your free website checkup" />
          <button
            type="button"
            className="checkup-close"
            aria-label="Close website checkup"
            onClick={() => setCheckupOpen(false)}
          />
        </div>
      )}

      {serviceOpen && (
        <div className="service-modal" role="dialog" aria-label={`${serviceOpen.label} service`}>
          <div className="service-modal-card">
            <button
              type="button"
              className="service-modal-close"
              aria-label="Close service details"
              onClick={() => setServiceOpen(null)}
            >
              ×
            </button>
            <img src={serviceOpen.image} alt={`${serviceOpen.label} service`} />
            <div className="service-modal-copy">
              <span>Greendy services</span>
              <h2>{serviceOpen.label}</h2>
              <p>{serviceOpen.description}</p>
              <a href="#contact" onClick={() => setServiceOpen(null)}>
                Get started <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
