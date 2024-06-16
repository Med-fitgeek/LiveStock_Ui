import React from 'react';
import { FaRegChartBar, FaStethoscope, FaCalendarAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Gestion des Animaux',
    description: 'Suivi précis et individualisé de chaque animal grâce à la technologie RFID.',
    icon: <FaRegChartBar className="text-blue-500" size={50} />,
  },
  {
    title: 'Suivi de la Santé',
    description: 'Enregistrement des données médicales, vaccinations et traitements de chaque animal.',
    icon: <FaStethoscope className="text-green-500" size={50} />,
  },
  {
    title: 'Planification de la Reproduction',
    description: 'Gestion des cycles de reproduction et des périodes de fertilité.',
    icon: <FaCalendarAlt className="text-red-500" size={50} />,
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
        <p className="text-lg mb-12">Découvrez les services que nous proposons pour améliorer la gestion de votre élevage.</p>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-2 h-16 w-16 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
