// src/components/CarCard.js
import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-xl mb-3" />
      <h3 className="text-xl font-semibold">{car.name}</h3>
      <p className="text-gray-600">{car.year} • {car.fuel} • {car.transmission}</p>
      <p className="mt-2 text-red-600 font-bold text-lg">Ksh {car.price.toLocaleString()}</p>
    </div>
  );
};

export default CarCard;
