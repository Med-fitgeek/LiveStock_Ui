import React, { useState } from 'react';

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Mouton 1', age: '2 ans', weight: '45 kg', breed: 'Ladoum', gender: 'Mâle', healthStatus: 'Bon', photo: '/images/mouton1.jpeg' },
    { id: 2, name: 'Mouton 2', age: '1 an', weight: '40 kg', breed: 'Talabir', gender: 'Femelle', healthStatus: 'Malade', photo: '/images/mouton2.jpg' },
  ]);

  const [newAnimal, setNewAnimal] = useState({
    name: '',
    age: '',
    weight: '',
    breed: '',
    gender: '',
    healthStatus: '',
    photo: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setNewAnimal({
        ...newAnimal,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setNewAnimal({
        ...newAnimal,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addAnimal = () => {
    if (Object.values(newAnimal).every(field => field !== null && field !== '')) {
      const newId = animals.length + 1;
      setAnimals([...animals, { ...newAnimal, id: newId }]);
      setNewAnimal({
        name: '',
        age: '',
        weight: '',
        breed: '',
        gender: '',
        healthStatus: '',
        photo: null,
      });
      setIsFormVisible(false);
    }
  };

  const updateAnimal = (id) => {
    const updatedAnimals = animals.map(animal => animal.id === id ? newAnimal : animal);
    setAnimals(updatedAnimals);
  };

  const removeAnimal = (id) => {
    setAnimals(animals.filter(animal => animal.id !== id));
  };

  return (
    <section className="bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Gestion des Animaux</h2>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 mb-4"
        >
          Enregistrer un mouton
        </button>
        {isFormVisible && (
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nom du mouton"
              name="name"
              value={newAnimal.name}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Âge"
              name="age"
              value={newAnimal.age}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Poids"
              name="weight"
              value={newAnimal.weight}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Race"
              name="breed"
              value={newAnimal.breed}
              onChange={handleChange}
              className="border p-2"
            />
            <select
              name="gender"
              value={newAnimal.gender}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="">Sélectionner le sexe</option>
              <option value="Mâle">Mâle</option>
              <option value="Femelle">Femelle</option>
            </select>
            <input
              type="text"
              placeholder="État de santé"
              name="healthStatus"
              value={newAnimal.healthStatus}
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
              onClick={addAnimal}
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
                  src={animal.photo ? (typeof animal.photo === 'string' ? animal.photo : URL.createObjectURL(animal.photo)) : '/images/default-sheep.jpg'}
                  alt={animal.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <strong>{animal.name}</strong> <br/> {animal.age} {animal.weight} {animal.breed} {animal.gender} {animal.healthStatus} {animal.classification}
                </div>
              </div>
              <div>
                <button
                  onClick={() => removeAnimal(animal.id)}
                  className="bg-red-500 text-white font-bold py-1 px-3 my-2 rounded-lg hover:bg-red-500 mr-2"
                >
                  Supprimer
                </button>
                <button
                  onClick={() => updateAnimal(animal.id)}
                  className="bg-yellow-500 text-white font-bold py-1 px-5 rounded-lg hover:bg-yellow-200"
                >
                  Modifier
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnimalManagement;
