import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://caam-app-api.onrender.com/api/bergerie/public', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          location: location,
          phone: phone,
          email: email,
          telephoneProprietaire: ownerPhone,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Inscription réussie !');
        console.log(data);
      } else {
        setMessage('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur lors de l\'inscription');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <div className="absolute z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg mx-4 md:mx-auto my-8 md:my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Inscription de la Bergerie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nom de la Bergerie</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Localisation</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Téléphone du Propriétaire</label>
            <input
              type="tel"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
            S'inscrire
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        <p className="mt-4 text-center text-gray-700">
          Déjà inscrit? <Link to="/login" className="text-green-600 hover:underline">Connectez-vous</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
