// src/pages/Cars.js
import React from 'react';
import CarCard from '../Components/CarCard';

const cars = [
  {
    id: 1,
    name: 'Toyota Harrier',
    image: 'https://via.placeholder.com/400x250?text=Toyota+Harrier',
    price: 2500000,
    year: 2017,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'Mazda CX-5',
    image: 'https://via.placeholder.com/400x250?text=Mazda+CX-5',
    price: 2200000,
    year: 2018,
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Subaru Forester',
    image: 'https://via.placeholder.com/400x250?text=Subaru+Forester',
    price: 2100000,
    year: 2016,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
];

const Cars = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
