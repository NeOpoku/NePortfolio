
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
    
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-500 to-brown-400 bg-clip-text text-transparent text-center font-league">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> ForecastIQ</h3>
              <p className="text-brown-400 mb-4">
              A user-friendly web application that delivers real-time and 5-day weather forecasts for cities around the globe.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CSS", "Typescript", "HTML", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-brown-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NeOpoku/ForecastIQ.git"
                  className="text-brown-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">AutoQuest</h3>
              <p className="text-brown-400 mb-4">
              This command-line interface (CLI) application allows users to manage a collection of vehicles. Users can create new vehicles (Car, Truck, or Motorbike) or select existing ones. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Typescript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-brown-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-brown-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/NeOpoku/AutoQuest.git"
                  className="text-brown-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              </div>
            </div>
    </section>
  );
};