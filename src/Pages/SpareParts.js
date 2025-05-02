// src/pages/SpareParts.js
import React from 'react';

const SpareParts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Genuine Spare Parts</h2>

      <p className="text-lg mb-4">
        We supply high-quality, genuine spare parts for Japanese and European vehicles. Whether you need routine replacements or hard-to-find parts, we’ve got you covered.
      </p>

      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Engine & Transmission Parts</li>
        <li>Suspension & Steering Components</li>
        <li>Brake Systems</li>
        <li>Lights & Body Accessories</li>
        <li>Filters, Belts, and Fluids</li>
        <li>Electrical Systems and Sensors</li>
      </ul>

      <p className="mt-6 text-lg">
        Need help identifying the right part? Reach out to us for a free consultation. We also assist with overseas orders and sourcing rare components.
      </p>

      <div className="mt-6">
        <a
          href="https://wa.me/254722578194"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          Request Spare Parts on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default SpareParts;
