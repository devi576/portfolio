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
    title: "Travel Management System",
    description:
      "Tour booking platform with package management, user registration, booking workflow, and admin features.",
    tech: ["Spring Boot", "MySQL", "HTML", "CSS"],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200",
  },

  {
    title: "Employee Management System",
    description:
      "Enterprise CRUD application for managing employee records, departments, attendance, and payroll using Spring Boot and REST APIs.",
    tech: [
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "MySQL",
      "REST API",
    ],
    github: "#",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
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