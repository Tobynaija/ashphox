
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Commercial Complex",
    location: "Commercial Development",
    category: "Commercial",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 2,
    title: "Luxury Residential Development",
    location: "Residential Development",
    category: "Residential",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 3,
    title: "Modern Architectural Structure",
    location: "Building Development",
    category: "Architecture",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 4,
    title: "Contemporary Office Building",
    location: "Office Development",
    category: "Commercial",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 5,
    title: "Residential Building Project",
    location: "Housing Development",
    category: "Residential",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 6,
    title: "Modern Building Design",
    location: "Architectural Development",
    category: "Architecture",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
  },

  {
    id: 7,
    title: "New Construction Project",
    location: "Nigeria",
    category: "Commercial",
    status: "ongoing",
    image: "/project3.jpg"
  },
  {
    id: 8,
    title: "New Building Development",
    location: "Nigeria",
    category: "Residential",
    status: "ongoing",
    image: "/project2.jpg"
  },
  {
    id: 9,
    title: "Engineering Project",
    location: "Nigeria",
    category: "Civil Engineering",
    status: "Ongoing",
    image: "/project1.jpg"
  },

];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        {/* SECTION HEADER */}

        <div className="projects-header">

          <div>
            <div className="section-label">
              <span></span>
              OUR PORTFOLIO
            </div>

            <h2>
              Projects That
              <br />
              <span>Speak For Us.</span>
            </h2>
          </div>

          <p>
            Explore our construction and engineering portfolio.
            Every project represents our commitment to quality,
            precision and professional excellence.
          </p>

        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className={
                  project.status === "Completed"
                    ? "project-status completed"
                    : "project-status ongoing"
                }>
                  {project.status}
                </span>

                <div className="project-overlay">
                  <a href="#contact" aria-label={`Enquire about ${project.title}`}>
                    <ArrowUpRight size={24} />
                  </a>
                </div>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.location}</p>

              </div>

            </div>

          ))}

        </div>

        {/* PROJECT CTA */}

        <div className="projects-bottom">

          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's discuss how we can bring your vision to life.</p>
          </div>

          <a href="#contact">
            Start a Project
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;
