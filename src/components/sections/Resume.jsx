export const Resume = () => {
  return (
    <>
     <section
         id="Resume">
        <div className="max-w-3xl mx-auto px-4 text-center mt-4 font-lato">
        <h2 className="text-7xl font-bold mb-2 bg-gradient-to-r from-brown-500 to-green-800 bg-clip-text text-transparent text-center font-league">
          Resume
        </h2>
            <a
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block font-lato"
            >
              View Resume
            </a>
          </div>
        </section>
    </>
  );
};

export default Resume;
