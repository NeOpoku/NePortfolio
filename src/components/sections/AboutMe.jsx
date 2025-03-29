

export const AboutMe = () => {
    const frontendSkills = [
        "React",
        "TypeScript",
        "TailwindCSS",
      ];
    
      const backendSkills = ["Node.js", "MongoDB", "GraphQL"];

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-brown-500 to-terracotta-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-brown-500/10 hover:-translate-y-1 transition-all">
            <p className="text-brown-400 mb-6 text-lg">
              After years of compassionate care as a Licensed Practical Nurse,
              I have embarked on a new journey into the world of coding. 
              My goal is to combine my healthcare expertise with modern technology to create innovative solutions that improve patient care and streamline healthcare processes.
            </p>
           

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-6 text-brown-500">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-terracotta-400/10 text-terracotta-400 py-1 px-3 rounded-full text-sm hover:bg-terracotta-400/20 hover:shadow-lg transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-brown-500">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-sagegreen-500/10 text-sagegreen-500 py-1 px-3 rounded-full text-sm hover:bg-sagegreen-500/20 hover:shadow-lg transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-brown-500/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-brown-500">🏫 Education</h3>
              <ul className="list-disc list-inside text-brown-400 space-y-2 text-lg">
                <li>
                  <strong>LPN Certification</strong> - [Henrico County School of Practical Nursing] (2022)
                </li>
                <li>
                  Self-Study & Coding Bootcamp – Focus on Full-Stack Development
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-brown-500/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-brown-500">💼 Work Experience</h3>
              <div className="space-y-4 text-brown-400 text-lg">
                <div>
                  <h4 className="font-semibold">
                    Licensed Practical Nurse at [The Chesapeake] (2025 – Present)
                  </h4>
                  <p>
                    Delivered patient care with empathy and precision in a fast-paced healthcare environment.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
