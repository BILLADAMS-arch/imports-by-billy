// src/components/ContactInfo.js
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="space-y-3 text-lg">
      <p>📞 +254 722 578 194 / +254 726 179 944</p>
      <p>📧 imports.bybilly@yahoo.com</p>
      <p>
        📸 Instagram:{' '}
        <a
          href="https://instagram.com/imports_bybilly"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline"
        >
          @imports_bybilly
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
