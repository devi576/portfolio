function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">
            — Who I Am
          </span>

          <h2 className="text-5xl font-bold mt-3">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 backdrop-blur-lg">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold text-black">
                RM
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Ramadevi Mahamkali
                </h3>

                <p className="text-slate-400">
                  Java Full Stack Developer · India
                </p>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  3+
                </h4>
                <p className="text-sm text-slate-400">
                  Projects
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  10+
                </h4>
                <p className="text-sm text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-4 text-center">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  2026
                </h4>
                <p className="text-sm text-slate-400">
                  Graduate
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="text-lg text-slate-300 leading-8 mb-6">
              Hello! I'm <span className="text-cyan-400 font-semibold">Ramadevi</span>,
              an aspiring Java Full Stack Developer passionate about building
              scalable web applications using Java, Spring Boot, MySQL and modern
              web technologies.
            </p>

            <p className="text-lg text-slate-300 leading-8 mb-10">
              I have hands-on experience developing projects such as an IT Helpdesk
              Ticket Management System and Travel Management System. I enjoy solving
              real-world problems through clean code, efficient database design,
              and user-friendly applications.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <p>
                  Detail-oriented with strong focus on clean and maintainable code
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <p>
                  Passionate about Java, Spring Boot, REST APIs and backend development
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                <p>
                  Strong team collaborator with effective communication skills
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <p>
                  Continuous learner exploring cloud, AI tools and modern development practices
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;