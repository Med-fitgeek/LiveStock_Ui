import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://caam-app-api.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail: phone,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(`Erreur: ${errorData.message || 'Erreur lors de la connexion'}`);
        return;
      }

      const data = await response.json();
      console.log(data); // Assurez-vous que le jeton est dans la réponse
      if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        setMessage('Connexion réussie !');
        navigate('/homepage');
      } else {
        setMessage('Le jeton de connexion est manquant');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur de connexion : Vérifiez votre connexion Internet ou l\'URL de l\'API.');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Navbar />
      <AnimatedBackground />
      <div className="absolute z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Connexion</h2>
        <form onSubmit={handleSubmit}>
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
            <label className="block text-gray-700">Mot de passe</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
              <label
                className="absolute right-4 top-3 cursor-pointer text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
            Se connecter
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        <p className="mt-4 text-center text-gray-700">
          Pas de compte? <Link to="/register" className="text-green-600 hover:underline">Inscrivez-vous</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
