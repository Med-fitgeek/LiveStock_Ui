import React from 'react';
import { FaChartBar, FaHeartbeat, FaCalendarCheck, FaCogs, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Tableaux de Bord Interactifs',
    description: 'Visualisez toutes les données importantes en un coup d\'œil grâce à des tableaux de bord personnalisables.',
    icon: <FaChartBar className="text-blue-500" size={30} />,
  },
  {
    title: 'Suivi de la Santé',
    description: 'Suivez l\'état de santé de vos animaux avec des alertes et des rappels pour les vaccinations et les traitements.',
    icon: <FaHeartbeat className="text-red-500" size={30} />,
  },
  {
    title: 'Planification des Reproductions',
    description: 'Gérez les cycles de reproduction et maximisez le potentiel de votre élevage.',
    icon: <FaCalendarCheck className="text-green-500" size={30} />,
  },
  {
    title: 'Automatisation des Tâches',
    description: 'Automatisez les tâches répétitives pour gagner du temps et réduire les erreurs.',
    icon: <FaCogs className="text-yellow-500" size={30} />,
  },
  {
    title: 'Accessibilité Mobile',
    description: 'Accédez à toutes les fonctionnalités de l\'application depuis votre appareil mobile.',
    icon: <FaMobileAlt className="text-purple-500" size={30} />,
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Fonctionnalités Clés</h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6  hover:shadow-xl transition-shadow duration-300 inline-block">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
