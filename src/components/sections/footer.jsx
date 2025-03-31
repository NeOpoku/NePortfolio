

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Imani Moss. All rights reserved.</p>
            <p>Designed & Developed by Imani</p>
          </div>
          {/* Social Media Links */}
    
            <a
              href="https://github.com/neopoku"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mossimani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
