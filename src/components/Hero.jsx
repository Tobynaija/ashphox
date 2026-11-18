
import { ArrowUpRight, Building2 } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-label">
          <Building2 size={18} />
          <span>ASPHOX ENGINEERING CONSULT LTD</span>
        </div>

        <h1>
          Building Your Vision.
          <br />
          <span>Engineering The Future.</span>
        </h1>

        <p>
          We bring ideas to life through engineering, construction
          and innovative solutions. Let's build something
          exceptional together.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary">
            Discuss Your Project
            <ArrowUpRight size={19} />
          </a>

          <a href="#projects" className="hero-btn secondary">
            Explore Our Projects
          </a>
        </div>

      </div>

      <div className="hero-bottom">
        <span>ENGINEERING EXCELLENCE</span>
        <span>QUALITY CONSTRUCTION</span>
        <span>BUILDING THE FUTURE</span>
      </div>

    </section>
  );
}

export default Hero;
