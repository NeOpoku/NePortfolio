export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-cream font-league Script"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-brown-400 bg-clip-text text-transparent leading-tight font-league Script">
            Hi, I'm Imani
          </h1>
  
          <p className="text-brown-400 text-lg mb-8 max-w-lg mx-auto font-Lato">
            For years, I worked as an LPN, where I learned the value of empathy,
            precision, and human connection. Now, I'm transitioning into code with a clear goal: 
            to combine my healthcare expertise with the power of technology. I’m passionate 
            about developing digital solutions that enhance patient care, streamline processes, 
            and ultimately make a positive impact on people’s lives.
          </p>
          <p className="text-brown-400 text-lg mb-8 max-w-lg mx-auto font-Lato">
            Welcome to my portfolio—where compassion meets code, and technology transforms 
            experience into meaningful solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-cream text-brown-500 py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>
  
            <a
              href="#contact"
              className="border border-sagegreen-500 text-brown-500 py-3 px-6 rounded font-medium transition duration-200 transform hover:-translate-y-0.5 hover:bg-sagegreen-100 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  };
  