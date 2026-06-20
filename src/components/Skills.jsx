function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Thymeleaf",
    "React",
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "REST APIs",
    "JPA",
    "Hibernate",
  ];

  const databaseSkills = [
    "MySQL",
    "JDBC",
    "Git",
    "GitHub",
    "Maven",
    "Postman",
  ];

  const SkillCard = ({ title, icon, skills }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">
      <div className="text-4xl mb-5">{icon}</div>

      <h3 className="text-2xl font-bold mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-2
              rounded-full
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-300
              text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-cyan-400 font-semibold">
            — Technical Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My Skills
          </h2>

          <p className="text-slate-400 mt-4">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <SkillCard
            title="Frontend Development"
            icon="🌐"
            skills={frontendSkills}
          />

          <SkillCard
            title="Backend Development"
            icon="⚙️"
            skills={backendSkills}
          />

          <SkillCard
            title="Database & Tools"
            icon="🗄️"
            skills={databaseSkills}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;