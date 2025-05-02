// src/pages/ImportProcess.js
import React from 'react';

const ImportProcess = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">How to Import a Car</h2>

      <div className="space-y-6 text-lg leading-relaxed">
        <div>
          <h3 className="font-semibold text-red-600">1. Choose Your Car</h3>
          <p>Browse our collection or send us your car preferences. We’ll help you select the best options from Japan, UK, or Thailand.</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-600">2. Make a Deposit</h3>
          <p>Pay a 50% deposit to initiate the import process. We handle purchasing, shipping, and port logistics on your behalf.</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-600">3. Wait for Arrival</h3>
          <p>Shipping takes about 6–8 weeks. We’ll notify you as soon as your vehicle arrives and is cleared at the port.</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-600">4. Settle Balance & Pick Up</h3>
          <p>Once the car is ready, pay the remaining 50% and collect your vehicle. Optional delivery to Nairobi is available.</p>
        </div>

        <div>
          <h3 className="font-semibold text-red-600">Need Help?</h3>
          <p>Our team is ready to walk you through the process. Contact us on <a href="/contact" className="text-blue-600 underline">WhatsApp or Email</a> for consultation.</p>
        </div>
      </div>
    </div>
  );
};

export default ImportProcess;
