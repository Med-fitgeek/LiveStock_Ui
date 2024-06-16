import React from 'react';
import SlidingNavbar from '../components/SlidingNavbar';
import Dashboard from '../components/Dashboard';
import AnimalManagement from '../components/AnimalManagement';
import ReproductionManagement from '../components/ReproductionManagement';
import Notifications from '../components/Notifications';
import Support from '../components/Support';
import HealthManagement from '../components/HealthManagment';
import MainNavbar from '../components/MainNavbar';

const sections = [
  { id: 'dashboard', name: 'Dashboard', component: <Dashboard /> },
  { id: 'animalManagement', name: 'Gestion des Animaux', component: <AnimalManagement /> },
  { id: 'healthManagement', name: 'Santé Animale', component: <HealthManagement/> },
  { id: 'reproductionManagement', name: 'Reproduction', component: <ReproductionManagement /> },
  { id: 'notifications', name: 'Notifications', component: <Notifications /> },
  { id: 'support', name: 'Support', component: <Support /> },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <MainNavbar /> 
      <SlidingNavbar sections={sections} />
    </div>
  );
};

export default HomePage;
