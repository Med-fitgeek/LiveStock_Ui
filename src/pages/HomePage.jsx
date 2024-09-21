import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import AnimalManagement from '../components/AnimalManagement';
import ReproductionManagement from '../components/ReproductionManagement';
import Notifications from '../components/Notifications';
import Support from '../components/Support';
import HealthManagement from '../components/HealthManagment';

const sections = [
  { id: 'dashboard', name: 'Dashboard', component: <Dashboard /> },
  { id: 'animalManagement', name: 'Gestion des Animaux', component: <AnimalManagement /> },
  { id: 'healthManagement', name: 'Santé Animale', component: <HealthManagement /> },
  { id: 'reproductionManagement', name: 'Reproduction', component: <ReproductionManagement /> },
  { id: 'notifications', name: 'Notifications', component: <Notifications /> },
  { id: 'support', name: 'Support', component: <Support /> },
];

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Vérifier si l'utilisateur est authentifié
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-4 ml-64">
        {sections.map((section) => (
          <div key={section.id} className={`${activeSection === section.id ? 'block' : 'hidden'}`}>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
