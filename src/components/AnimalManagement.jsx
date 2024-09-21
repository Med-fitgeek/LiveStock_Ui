import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { MdDelete, MdCancel, MdSave } from "react-icons/md";
import { GiSheep } from "react-icons/gi";

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Mouton 1', age: '2 ans', weight: '45 kg', breed: 'Ladoum', gender: 'Mâle', healthStatus: 'Bon', photo: '/images/mouton1.jpeg' },
    { id: 2, name: 'Mouton 2', age: '1 an', weight: '40 kg', breed: 'Talabir', gender: 'Femelle', healthStatus: 'Malade', photo: '/images/mouton2.jpg' },
    { id: 3, name: 'Mouton 3', age: '2 ans', weight: '45 kg', breed: 'Ladoum', gender: 'Mâle', healthStatus: 'Bon', photo: '/images/mouton3.jpeg' },
    { id: 4, name: 'Mouton 4', age: '1 an', weight: '40 kg', breed: 'Talabir', gender: 'Femelle', healthStatus: 'Malade', photo: '/images/mouton4.jpeg' },
    { id: 5, name: 'Mouton 5', age: '2 ans', weight: '45 kg', breed: 'Ladoum', gender: 'Mâle', healthStatus: 'Bon', photo: '/images/mouton5.jpeg' },
    { id: 6, name: 'Mouton 6', age: '1 an', weight: '40 kg', breed: 'Talabir', gender: 'Femelle', healthStatus: 'Malade', photo: '/images/mouton6.jpeg' },
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

  const addAnimal = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }

    if (Object.values(newAnimal).every(field => field !== null && field !== '')) {
      try {
        const response = await fetch('https://caam-app-api.onrender.com/moutons', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: newAnimal.name,
            breed: newAnimal.breed,
            age: newAnimal.age,
            weight: newAnimal.weight,
            gender: newAnimal.gender,
            healthStatus: newAnimal.healthStatus,
            bergerie: {
              id: 16,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add animal');
        }

        const data = await response.json();
        const newId = data.id;
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
      } catch (error) {
        console.error('Error adding animal:', error);
      }
    }
  };

  const removeAnimal = (id) => {
    setAnimals(animals.filter(animal => animal.id !== id));
  };

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="container mx-auto">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <GiSheep className="text-3xl font-bold" style={{ marginRight: '10px' }} />
  <h2 className="text-3xl font-bold mb-6">Gestion des Animaux</h2>
</div>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="bg-green-600 text-white flex items-center py-2 px-4 rounded-lg hover:bg-green-500 transition-all duration-300"
          >
            <GrAdd className="mr-2" /> Ajouter un Animal
          </button>
        </div>
        {isFormVisible && (
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              placeholder="Nom du mouton"
              name="name"
              value={newAnimal.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Âge"
              name="age"
              value={newAnimal.age}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Poids"
              name="weight"
              value={newAnimal.weight}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Race"
              name="breed"
              value={newAnimal.breed}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <select
              name="gender"
              value={newAnimal.gender}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
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
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="flex justify-between">
              <button
                onClick={addAnimal}
                className="bg-green-600 text-white flex items-center py-2 px-4 rounded-lg hover:bg-green-500 transition-all duration-300"
              >
                <MdSave className="mr-2" /> Sauvegarder
              </button>
              <button
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="bg-red-600 text-white flex items-center py-2 px-4 rounded-lg hover:bg-red-500 transition-all duration-300"
              >
                <MdCancel className="mr-2" /> Annuler
              </button>
            </div>
          </div>
        )}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <li key={animal.id} className="bg-white p-4 rounded-lg shadow-md flex items-center hover:bg-green-200">
              <img
                src={animal.photo ? (typeof animal.photo === 'string' ? animal.photo : URL.createObjectURL(animal.photo)) : '/images/default-sheep.jpg'}
                alt={animal.name}
                className="h-24 w-24 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{animal.name}</h3>
                <p>{animal.age} | {animal.weight} | {animal.breed}</p>
                <p>{animal.gender} | {animal.healthStatus}</p>
              </div>
              <button
                onClick={() => removeAnimal(animal.id)}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition-all duration-300"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnimalManagement;
