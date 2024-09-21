import React, { createContext, useState, useEffect } from 'react';

// Création du contexte d'authentification
export const AuthContext = createContext();

// Fonction de fournisseur de contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifier si l'utilisateur est déjà connecté au chargement de l'application
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fonction pour se connecter
  const login = (token) => { 
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  // Fonction pour se déconnecter
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
