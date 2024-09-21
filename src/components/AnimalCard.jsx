import React from 'react';

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div onClick={() => onClick(animal)} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-green-200 transition">
      <img src={animal.photo} alt={animal.name} className="h-24 w-24 rounded-full mx-auto" />
      <h3 className="text-xl font-bold text-center mt-2">{animal.name}</h3>
      <p className="text-center">{animal.medicalHistory || animal.cycle}</p>
    </div>
  );
};

export default AnimalCard;
