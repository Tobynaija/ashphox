
import {
  Building2,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* COMPANY BRAND */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-logo-icon">
                <Building2 size={27} />
              </div>

              <div>
                ASPHOX
                <span>ENGINEERING CONSULT LTD</span>
              </div>
            </a>

            <p>
              Building your vision and engineering the future
              through professional construction and engineering
              solutions.
            </p>

            <a href="#contact" className="footer-cta">
              Start a Project <ArrowUpRight size={17} />
            </a>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#projects">Our Projects</a>
            <a href="#contact">Contact Us</a>
          </div>

          {/* SERVICES */}

          <div className="footer-links">
            <h3>Our Services</h3>

            <a href="#services">Building Construction</a>
            <a href="#services">Civil Engineering</a>
            <a href="#services">Structural Engineering</a>
            <a href="#services">Architectural Design</a>
            <a href="#services">Project Management</a>
          </div>

          {/* CONTACT DETAILS */}

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <p>
              <Mail size={17} />
              <a href="mailto:Oyewale32@gmail.com">
                Oyewale32@gmail.com
              </a>
            </p>

            <p>
              <Phone size={17} />
              <a href="tel:+2348060300132">
                +234 806 030 0132
              </a>
            </p>

            <p>
              <MapPin size={17} />
              <span>
                No 9, Sunday Olanigba Street,
                Kudeyibu Estate, Ijegun,
                Lagos State, Nigeria.
              </span>
            </p>
          </div>

        </div>

        {/* ENGINEER PROFILE */}

        <div className="footer-engineer">
          <div className="footer-engineer-image">
            <img
              src="/engineer-asifat.jpeg"
              alt="Engineer Asifat Oyewale"
            />
          </div>

          <div className="footer-engineer-info">
            <span className="footer-engineer-label">
              MEET OUR ENGINEER
            </span>

            <h3>Engineer Asifat Oyewale.O.</h3>

            <p>
              Engineering excellence, professional commitment
              and quality project delivery.
            </p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ASPHOX Engineering
            Consult LTD. All Rights Reserved.
          </p>

          <a href="#home">
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
