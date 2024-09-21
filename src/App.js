import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
