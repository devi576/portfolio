import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gkkdzr",
        "template_2arnwvd",
        form.current,
        "GPTc9rTGdBRH8NQeQ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section
  id="contact"
  className="py-16 px-4 bg-slate-950 text-white"
>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">
            — Say Hello
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Get In Touch
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations.
            Whether you have a project idea, a question, or just want to
            connect, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">

          {/* Contact Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">
                    ramamahamkali18@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400">
                    Bangalore, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-slate-400">
                    linkedin.com/in/ramadevi-mahamkali-625801277
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">🐙</div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-slate-400">
                    github.com/devi576
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 text-slate-300">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Ramadevi"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-slate-300">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Mahamkali"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Job Opportunity"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  font-semibold
                  px-5
                  py-2
                  rounded-lg
                  transition
                "
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;