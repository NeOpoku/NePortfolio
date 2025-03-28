import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Imani
          </h1>

          <p className="tex-brown-400 text-lg mb-8 max-w-lg mx-auto">
          For years, I worked as an LPN, where I learned the value of empathy, precision, and human connection. 
          Now, I'm transitioning into code with a clear goal: to combine my healthcare expertise with the power of technology. 
          I’m passionate about developing digital solutions that enhance patient care, streamline processes, and ultimately make a positive impact on people’s lives. 
          Whether I’m crafting user-friendly interfaces or building innovative applications, I bring the same care and attention to detail that defined my nursing career. </p>
          <p className="tex-brown-400 text-lg mb-8 max-w-lg mx-auto"> Welcome to my portfolio—where compassion meets code, and technology transforms experience into meaningful solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-brown-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-sagegreen-500/50 text-brown-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};