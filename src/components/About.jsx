
import { ArrowUpRight, CheckCircle2, Building2 } from "lucide-react";

function About() {
  const features = [
    "Professional Engineering Solutions",
    "Quality Construction Standards",
    "Reliable Project Delivery",
    "Innovative Building Techniques"
  ];

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT IMAGE */}

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
            alt="Modern architectural building"
          />

          <div className="about-image-card">
            <Building2 size={30} />
            <div>
              <h3>Built on Excellence</h3>
              <p>Driven by engineering innovation</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="about-content">

          <div className="section-label">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h2>
            Engineering Today.
            <br />
            <span>Building Tomorrow.</span>
          </h2>

          <p className="about-description">
            ASPHOX Engineering Consult LTD is committed to
            delivering professional engineering and construction
            solutions. We combine technical expertise, innovative
            thinking and attention to detail to bring construction
            visions to life.
          </p>

          <p className="about-description">
            Our approach focuses on quality workmanship,
            professional standards and dependable project
            execution, ensuring every project receives the
            attention it deserves.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div className="about-feature" key={index}>
                <CheckCircle2 size={19} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-btn">
            Get to Know Us
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;
