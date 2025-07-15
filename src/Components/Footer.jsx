import React from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Let’s Work Together...</h3>
          <p className="text-gray-300">
            Ready to work together? Reach out and let’s build something amazing!
          </p>
        </div>

        <div className="flex space-x-6 justify-center md:justify-end">
          <a
           href="mailto:dharanitharan2112@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Dharanitharan%2C%0A%0AI'd%20like%20to%20discuss..."
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dharanitharan-m"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="tel:+91 9566872103"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Dharanitharan21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Dharanitharan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
