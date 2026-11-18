
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Lightbulb,
  HardHat
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "We emphasize quality workmanship and careful attention to detail throughout every stage of a project."
  },
  {
    icon: Award,
    title: "Professional Standards",
    description:
      "Our approach prioritizes professional standards, responsible planning, and dependable execution."
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We work to understand each client's needs and maintain clear communication from start to finish."
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description:
      "We value proper scheduling, coordination, and efficient project management."
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We consider practical and modern solutions to meet different construction and engineering needs."
  },
  {
    icon: HardHat,
    title: "Safety Conscious",
    description:
      "We recognize the importance of safe working practices and responsible site management."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-header">
          <p className="section-label">WHY CHOOSE ASPHOX</p>

          <h2>
            The Right Partner for
            <span> Your Next Project.</span>
          </h2>

          <p className="why-intro">
            Choosing the right engineering partner matters.
            We focus on quality, professionalism, communication,
            and practical solutions throughout every project.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div className="why-card" key={index}>
                <div className="why-icon">
                  <Icon size={27} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
