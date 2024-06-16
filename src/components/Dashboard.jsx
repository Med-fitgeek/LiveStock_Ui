import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const totalSheep = 50; // Exemples de données
  const healthySheep = 45;
  const sickSheep = 5;
  const pregnantSheep = 10;
  const maleSheep = 20;
  const femaleSheep = 30;
  const nextTasks = [
    { id: 1, task: 'Vaccination', date: '2024-06-15' },
    { id: 2, task: 'Alimentation', date: '2024-06-16' },
  ];

  return (
    <section className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Tableau de Bord</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-100 rounded shadow">
            <h3 className="text-xl font-semibold">Total de Moutons</h3>
            <p className="text-2xl">{totalSheep}</p>
            <Link to="/animals" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
          <div className="p-4 bg-purple-100 rounded shadow">
            <h3 className="text-xl font-semibold">Mâles</h3>
            <p className="text-2xl">{maleSheep}</p>
            <Link to="/animals?gender=male" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
          <div className="p-4 bg-pink-100 rounded shadow">
            <h3 className="text-xl font-semibold">Femelles</h3>
            <p className="text-2xl">{femaleSheep}</p>
            <Link to="/animals?gender=female" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
          <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="text-xl font-semibold">Moutons en Bonne Santé</h3>
            <p className="text-2xl">{healthySheep}</p>
            <Link to="/animals?status=healthy" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
          <div className="p-4 bg-red-100 rounded shadow">
            <h3 className="text-xl font-semibold">Moutons Malades</h3>
            <p className="text-2xl">{sickSheep}</p>
            <Link to="/animals?status=sick" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
          <div className="p-4 bg-yellow-100 rounded shadow">
            <h3 className="text-xl font-semibold">Brebis Enceintes</h3>
            <p className="text-2xl">{pregnantSheep}</p>
            <Link to="/animals?status=pregnant" className="text-blue-600 hover:underline mt-2 inline-block">Voir détails</Link>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4">Prochaines Tâches</h3>
        <ul>
          {nextTasks.map((task) => (
            <li key={task.id} className="mb-2 p-2 bg-gray-100 rounded shadow">
              <div className="flex justify-between">
                <span>{task.task}</span>
                <span>{task.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
