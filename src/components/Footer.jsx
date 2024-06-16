import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Guett-Gui</h3>
            <p className="text-sm">
              Une solution complète pour la gestion de votre élevage.<br></br> 
              Facilitez le suivi de vos animaux et améliorez votre<br></br> productivité avec notre application.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Liens Utiles</h3>
            <ul>
              <li><a href="/" className="text-sm hover:text-gray-900">Accueil</a></li>
              <li><a href="/about" className="text-sm hover:text-gray-900">À Propos</a></li>
              <li><a href="/contact" className="text-sm hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-sm"><strong>Email:</strong> contact@guettgui.com</li>
              <li className="text-sm"><strong>Téléphone:</strong> +221 33 123 45 67</li>
              <li className="text-sm"><strong>Adresse:</strong> Dakar, Sénégal</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm">&copy; 2024 Guett Gui. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
