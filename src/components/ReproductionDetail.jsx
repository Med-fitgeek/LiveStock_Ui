import React, { useState } from 'react';

const ReproductionDetail = ({ animal, onClose, onSave }) => {
  const [editableAnimal, setEditableAnimal] = useState({ ...animal });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableAnimal({ ...editableAnimal, [name]: value });
  };

  const handleSave = () => {
    onSave(editableAnimal);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{editableAnimal.name}</h2>
        <div className="mb-4">
          <label className="block mb-2">Cycle</label>
          <input
            type="text"
            name="cycle"
            value={editableAnimal.cycle}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date d'accouplement</label>
          <input
            type="date"
            name="breedingDate"
            value={editableAnimal.breedingDate}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Résultats</label>
          <input
            type="text"
            name="results"
            value={editableAnimal.results}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={handleSave} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500">Sauvegarder</button>
          <button onClick={onClose} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500">Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default ReproductionDetail;
