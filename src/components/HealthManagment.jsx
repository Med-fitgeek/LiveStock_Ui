import React, { useState } from 'react';

const HealthManagement = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Mouton 1', medicalHistory: 'Vacciné le 2024-06-01', treatments: 'Traitement A', photo: '/images/mouton1.jpeg' },
    { id: 2, name: 'Mouton 2', medicalHistory: 'Vacciné le 2024-05-20', treatments: 'Traitement B', photo: '/images/mouton2.jpg' },
  ]);

  const [newMedicalRecord, setNewMedicalRecord] = useState({
    name: '',
    medicalHistory: '',
    treatments: '',
    photo: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setNewMedicalRecord({
        ...newMedicalRecord,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewMedicalRecord({
        ...newMedicalRecord,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addMedicalRecord = () => {
    if (Object.values(newMedicalRecord).every(field => field !== null && field.trim() !== '')) {
      const newId = animals.length + 1;
      setAnimals([...animals, { ...newMedicalRecord, id: newId }]);
      setNewMedicalRecord({
        name: '',
        medicalHistory: '',
        treatments: '',
        photo: null,
      });
      setIsFormVisible(false);
    }
  };

  const updateMedicalRecord = (id) => {
    const updatedAnimals = animals.map(animal => animal.id === id ? newMedicalRecord : animal);
    setAnimals(updatedAnimals);
  };

  const removeMedicalRecord = (id) => {
    setAnimals(animals.filter(animal => animal.id !== id));
  };

  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Gestion de la Santé Animale</h2>
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
              value={newMedicalRecord.name}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Historique médical"
              name="medicalHistory"
              value={newMedicalRecord.medicalHistory}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Traitements"
              name="treatments"
              value={newMedicalRecord.treatments}
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
              onClick={addMedicalRecord}
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
                  <strong>{animal.name}</strong> <br/> {animal.medicalHistory} <br/> {animal.treatments}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HealthManagement;
