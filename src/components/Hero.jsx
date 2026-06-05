import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
          🚀 Open to  Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

          Hi, I'm{" "}

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ramadevi
          </span>

        </h1>

        {/* Subtitle */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">
          Fresher & Aspiring Full Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-8">
         I craft clean, performant web applications with a focus on great user experience and solid engineering principles. Focused on creating clean, efficient, and
          user-friendly solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="
            px-8 py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
            px-8 py-3
            rounded-xl
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            "
          >
            Download Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/devi576"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ramadevi-mahamkali-625801277"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">

          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
            <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
            <p className="text-slate-400 text-sm">Projects</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
            <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
            <p className="text-slate-400 text-sm">Technologies</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
            <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
            <p className="text-slate-400 text-sm">Coding Problems</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;