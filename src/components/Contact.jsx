
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">CONTACT US</p>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <p>
            Have a construction or engineering project in mind?
            Get in touch with us. We would be happy to discuss
            your ideas and project requirements.
          </p>
        </div>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              Reach out to our team for project inquiries,
              consultations and quotation requests.
            </p>

            {/* EMAIL */}

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail />
              </div>

              <div>
                <h4>Email Address</h4>
                <a href="mailto:oyewale323@gmail.com">
                  oyewale323@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE NUMBER */}

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone />
              </div>

              <div>
                <h4>Phone Number</h4>
                <a href="tel:+2348060300132">
                  +234 806 030 0132
                </a>
              </div>
            </div>

            {/* WHATSAPP */}

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MessageCircle />
              </div>

              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/2348060300132"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* OFFICE ADDRESS */}

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin />
              </div>

              <div>
                <h4>Office Address</h4>
                <p>
                  No 9, Sunday Olanigba Street,
                  Kudeyibu Estate, Ijegun,
                  Lagos State, Nigeria.
                </p>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}

            <a
              href="https://wa.me/2348060300132"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
            </a>

            <div className="contact-note">
              <h4>Have a project to discuss?</h4>

              <p>
                Send us your inquiry and let's explore
                how we can work together.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}

          <form
            className="contact-form"
            action="https://formsubmit.co/Oyewale323@gmail.com"
            method="POST"
          >
            <h3>Send Us an Inquiry</h3>

            {/* FORM SETTINGS */}

            <input
              type="hidden"
              name="_subject"
              value="New Project Inquiry - ASPHOX Engineering Consult LTD"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            {/* NAME AND EMAIL */}

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            {/* PHONE */}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            {/* SERVICE */}

            <select
              name="service"
              required
            >
              <option value="">Select a Service</option>

              <option value="Building Construction">
                Building Construction
              </option>

              <option value="Civil Engineering">
                Civil Engineering
              </option>

              <option value="Structural Engineering">
                Structural Engineering
              </option>

              <option value="Architectural Design">
                Architectural Design
              </option>

              <option value="Project Management">
                Project Management
              </option>

              <option value="Renovation and Maintenance">
                Renovation and Maintenance
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="6"
              required
            />

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send Inquiry
              <ArrowUpRight size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
