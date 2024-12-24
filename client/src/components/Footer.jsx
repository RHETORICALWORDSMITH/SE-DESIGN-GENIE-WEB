const Footer = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>

      <footer className="bg-gray-900 text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2">About Us</h3>
              <p className="text-xs text-gray-400">
                We provide the best creative tools for artists, helping you bring your visions to life.
              </p>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
              <ul className="text-xs">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
              <p className="text-xs text-gray-400">
                Email:{" "}
                <a href="mailto:support@artapp.com" className="text-gray-200">
                  support@artapp.com
                </a>
              </p>
              <p className="text-xs text-gray-400">
                Phone:{" "}
                <a href="tel:+123456789" className="text-gray-200">
                  +1 234 567 89
                </a>
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
