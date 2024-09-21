import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import ReproductionDetail from './ReproductionDetail';
import {MdOutlinePets } from "react-icons/md";


const ReproductionManagement = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Mouton 1', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton1.jpeg' },
    { id: 2, name: 'Mouton 2', cycle: 'Cycle 2', breedingDate: '2024-05-20', results: 'Échec', photo: '/images/mouton2.jpg' },
    { id: 3, name: 'Mouton 3', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton3.jpeg' },
    { id: 4, name: 'Mouton 4', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton4.jpeg' },
    { id: 5, name: 'Mouton 5', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton5.jpeg' },
    { id: 6, name: 'Mouton 6', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton6.jpeg' },
  ]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-10">
          <MdOutlinePets className="text-4xl font-bold mr-4" />
          <h2 className="text-3xl font-bold mb-6 text-center">Planification et Suivi de la Reproduction</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} onClick={setSelectedAnimal} />
          ))}
        </div>
        {selectedAnimal && (
          <ReproductionDetail
            animal={selectedAnimal}
            onClose={() => setSelectedAnimal(null)}
            onSave={(updatedAnimal) => {
              setAnimals(animals.map(a => a.id === updatedAnimal.id ? updatedAnimal : a));
              setSelectedAnimal(null);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ReproductionManagement;
