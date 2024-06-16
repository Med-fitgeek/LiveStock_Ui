import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'Suivi précis et individualisé de chaque animal',
  'Gestion des données médicales et des vaccinations',
  'Planification des cycles de reproduction',
  'Accès à des tableaux de bord interactifs',
  'Automatisation des tâches répétitives',
  'Accessibilité mobile pour gérer vos animaux à distance',
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Gérez votre élevage en toute simplicité</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Notre solution de gestion de bétail vous permet de suivre chaque animal, de gérer leur santé, de planifier la reproduction et bien plus encore. Profitez d'une interface intuitive et d'outils puissants pour optimiser votre élevage.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">Fonctionnalités incluses</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Paiement unique, accès à vie</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">150.000 FCFA</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">XOF</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Obtenez l'accès
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Factures et reçus disponibles pour un remboursement facile par l'entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
