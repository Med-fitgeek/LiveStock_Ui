import React, { useState } from 'react';

const ReproductionManagement = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Mouton 1', cycle: 'Cycle 1', breedingDate: '2024-06-01', results: 'Succès', photo: '/images/mouton1.jpeg' },
    { id: 2, name: 'Mouton 2', cycle: 'Cycle 2', breedingDate: '2024-05-20', results: 'Échec', photo: '/images/mouton2.jpg' },
  ]);

  const [newReproductionRecord, setNewReproductionRecord] = useState({
    name: '',
    cycle: '',
    breedingDate: '',
    results: '',
    photo: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setNewReproductionRecord({
        ...newReproductionRecord,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewReproductionRecord({
        ...newReproductionRecord,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addReproductionRecord = () => {
    if (Object.values(newReproductionRecord).every(field => field !== null && field.trim() !== '')) {
      const newId = animals.length + 1;
      setAnimals([...animals, { ...newReproductionRecord, id: newId }]);
      setNewReproductionRecord({
        name: '',
        cycle: '',
        breedingDate: '',
        results: '',
        photo: null,
      });
      setIsFormVisible(false);
    }
  };

  const updateReproductionRecord = (id) => {
    const updatedAnimals = animals.map(animal => animal.id === id ? newReproductionRecord : animal);
    setAnimals(updatedAnimals);
  };

  const removeReproductionRecord = (id) => {
    setAnimals(animals.filter(animal => animal.id !== id));
  };

  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Planification et Suivi de la Reproduction</h2>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 mb-4"
        >
          Enregistrer un dossier
        </button>
        {isFormVisible && (
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nom du mouton"
              name="name"
              value={newReproductionRecord.name}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Cycle"
              name="cycle"
              value={newReproductionRecord.cycle}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Date d'accouplement"
              name="breedingDate"
              value={newReproductionRecord.breedingDate}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Résultats"
              name="results"
              value={newReproductionRecord.results}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="border p-2"
            />
            <button
              onClick={addReproductionRecord}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
            >
              Ajouter
            </button>
          </div>
        )}
        <ul className="mt-6">
          {animals.map((animal) => (
            <li key={animal.id} className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
              <div className="flex items-center">
                <img
                  src={animal.photo instanceof File ? URL.createObjectURL(animal.photo) : animal.photo}
                  alt={animal.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <strong>{animal.name}</strong> <br/> {animal.cycle} <br/> {animal.breedingDate} {animal.results}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReproductionManagement;
