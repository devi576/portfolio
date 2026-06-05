function Skills() {
  const frontendSkills = [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "Thymeleaf", level: 85 },
  ];

  const backendSkills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "Spring MVC", level: 85 },
    { name: "REST APIs", level: 90 },
  ];

  const databaseSkills = [
    { name: "MySQL", level: 90 },
    { name: "JPA / Hibernate", level: 85 },
    { name: "JDBC", level: 88 },
    { name: "Git / GitHub", level: 85 },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-cyan-400">{skill.level}%</span>
      </div>

      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">
            — Technical Skills
          </span>

          <h2 className="text-5xl font-bold mt-3">
            My Expertise
          </h2>

          <p className="text-slate-400 mt-4">
            Technologies and tools I use to build scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <div className="text-4xl mb-5">🌐</div>

            <h3 className="text-2xl font-bold mb-8">
              Frontend Development
            </h3>

            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <div className="text-4xl mb-5">⚙️</div>

            <h3 className="text-2xl font-bold mb-8">
              Backend Development
            </h3>

            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Database */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <div className="text-4xl mb-5">🗄️</div>

            <h3 className="text-2xl font-bold mb-8">
              Database & Tools
            </h3>

            {databaseSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;