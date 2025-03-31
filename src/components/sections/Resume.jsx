export const Resume = () => {
  return (
     <section
          id="Resume" 
          className="min-h-screen flex items-center justify-center py-20 font-league"
          >

          <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-500 to-brown-400 bg-clip-text text-transparent text-center font-league">
            {" "}
            Resume
          </h2>
                  {/* Resume Download Link (Optional) */}
                  <div className="text-center mt-8">
                      <a
                          href="" // Make sure the PDF is in your public folder or adjust the path
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
                      >
                          Download Resume
                      </a>
                  </div>
                  </div>
            </section>

  );
};

export default Resume;
