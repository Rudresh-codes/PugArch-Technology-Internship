import React from "react";

const Footer = () => (
  <footer className="bg-black text-center py-4 mt-8">
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} EventHub. All rights reserved.
    </p>
        <a
      href="https://github.com/your-github-username/eventhub"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline text-xs block mt-2"
    >
      View on GitHub
    </a>
  </footer>
);

export default Footer;