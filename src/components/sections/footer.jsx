
export const Footer = () => {
  return (
    <footer className="bg-green-900 text-coolgray py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-4 md:mb-0 text-center md:text-left text-white">
            <p>&copy; {new Date().getFullYear()} Imani Moss. All rights reserved.</p>
            <p>Designed & Developed by Imani.</p>
          </div>
        
            <a
              href="https://github.com/neopoku"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coolgray-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mossimani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coolgray-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
