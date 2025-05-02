// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      <section className="bg-black text-white rounded-2xl p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">We Make Your Movement Easy</h1>
        <p className="text-lg mb-4">Trusted car importers and local sellers. Quality cars, flexible payments, and genuine spare parts.</p>
        <div className="space-x-4">
          <Link to="/cars" className="bg-red-600 px-6 py-2 rounded-xl font-semibold hover:bg-red-700">View Cars</Link>
          <Link to="/contact" className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black">Contact Us</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-2 text-lg list-disc list-inside">
          <li>Import and sale of quality cars from Japan, UK, and Thailand</li>
          <li>Flexible payment options – 50% deposit, clear balance on arrival</li>
          <li>Local showroom stock available for viewing</li>
          <li>Genuine spare parts supply and consultation</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
