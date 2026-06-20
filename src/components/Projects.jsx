const projects = [
  {
    title: "IT Helpdesk Ticket Management System",
    description:
      "A full-stack ticket management application with authentication, ticket tracking, role-based access, and admin dashboard.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "#",
    demo: "#",
    image: "https://www.givainc.com/images/ticket_management.png",
  },

  {
    title: "Placement Beacon",
    description:
      "Developed a full-stack web application for managing placement drives, student registrations, and company interactions with a user-friendly interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/devi576/Placement-Beacon",
    demo: "#",
    image:"https://media.licdn.com/dms/image/v2/D4D12AQHi3drj6anjfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1658853778185?e=2147483647&v=beta&t=2sjYSO5zcPiVHe5sNKk8BBu4O2F1PSwHT81JbCGhRXI",
  },

  {
    title: "Explailiver+ - Liver Disease Prediction System",
    description:
      "A web application that predicts liver disease based on user input and provides explanations for the predictions using machine learning models.",
    tech: [
      "Python",
      "Flask",
      "Scikit-learn",
      "CatBoost",
      "LightGBM",
      "XGBoost",
    ],
    github: "#",
    demo: "https://liver1-aaon.vercel.app/",
    image:
      "https://thumbs.dreamstime.com/b/healthtech-medical-diagnostics-biotech-innovation-glowing-low-poly-liver-above-circuit-board-lines-blue-neon-vector-427357562.jpg",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
        <span className="text-cyan-400 font-semibold">
             — what I've built
          </span>

        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Some projects I've built using Java, Spring Boot and MySQL
        </p>
</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              hover:border-cyan-400
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
              "
            >

            
<img
  src={project.image}
  alt={project.title}
  className="w-full h-40 object-cover"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/600x300?text=Project+Image";
  }}
/>
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3 py-1
                      rounded-full
                      bg-cyan-500/20
                      border
                      border-cyan-500/30
                      text-cyan-300
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="
                    px-5 py-2
                    rounded-lg
                    bg-slate-800
                    hover:bg-slate-700
                    transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
                    px-5 py-2
                    rounded-lg
                    bg-cyan-500
                    text-black
                    font-semibold
                    hover:scale-105
                    transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;