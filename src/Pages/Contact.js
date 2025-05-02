// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

      <div className="space-y-4 text-lg">
        <p>📍 <strong>Location:</strong> 8080 Garden City, Nairobi, Kenya</p>
        <p>📞 <strong>Phone:</strong> +254 722 578 194 / +254 726 179 944</p>
        <p>📧 <strong>Email:</strong> <a href="mailto:imports.bybilly@yahoo.com" className="text-blue-600">imports.bybilly@yahoo.com</a></p>
        <p>📸 <strong>Instagram:</strong> <a href="https://instagram.com/imports_bybilly" target="_blank" rel="noreferrer" className="text-pink-500">@imports_bybilly</a></p>
      </div>

      <div className="mt-6">
        <a
          href="https://wa.me/254722578194"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
