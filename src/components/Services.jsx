
import {
  Building2,
  HardHat,
  DraftingCompass,
  ClipboardCheck,
  Hammer,
  Wrench,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Building Construction",
    description:
      "Professional residential and commercial building construction with a focus on quality, durability and excellent workmanship.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    icon: Building2
  },
  {
    id: 2,
    title: "Civil Engineering",
    description:
      "Engineering solutions for infrastructure development, site works and essential civil construction projects.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
    icon: HardHat
  },
  {
    id: 3,
    title: "Structural Engineering",
    description:
      "Structural planning and engineering solutions designed with safety, stability and performance in mind.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    icon: DraftingCompass
  },
  {
    id: 4,
    title: "Architectural Design",
    description:
      "Creative architectural concepts and building designs that combine functionality, aesthetics and innovation.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85",
    icon: ClipboardCheck
  },
  {
    id: 5,
    title: "Project Management",
    description:
      "Professional project coordination, planning and supervision to help ensure effective project delivery.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    icon: ClipboardCheck
  },
  {
    id: 6,
    title: "Renovation & Maintenance",
    description:
      "Building renovation, improvement and maintenance services that help preserve and enhance properties.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    icon: Wrench
  }
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* SECTION HEADER */}

        <div className="services-header">

          <div>
            <div className="section-label">
              <span></span>
              WHAT WE DO
            </div>

            <h2>
              Our Professional
              <br />
              <span>Engineering Services</span>
            </h2>
          </div>

          <p>
            From initial planning to project completion,
            we provide professional construction and
            engineering solutions tailored to your needs.
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.id}>

                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <div className="service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#contact" className="service-link">
                    Discuss Service
                    <ArrowUpRight size={17} />
                  </a>

                </div>

              </div>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <div className="services-bottom">
          <p>Have a construction project in mind?</p>

          <a href="#contact">
            Let's Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Services;
