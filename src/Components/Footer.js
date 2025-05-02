// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-12 rounded-t-2xl">
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">Imports by Billy</p>
        <p>
          📞 +254 722 578 194 / +254 726 179 944 ·{' '}
          <a
            href="https://instagram.com/imports_bybilly"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 underline"
          >
            Instagram
          </a>
        </p>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Imports by Billy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
