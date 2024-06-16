import React from 'react';

const Support = () => {
  const faqs = [
    {
      question: 'Comment ajouter un mouton?',
      answer: 'Pour ajouter un mouton, allez dans la section "Gestion des Animaux" et remplissez le formulaire avec les informations nécessaires.',
    },
    {
      question: 'Comment vérifier l\'état de santé d\'un mouton?',
      answer: 'Dans la section "Gestion des Animaux", vous pouvez voir l\'état de santé de chaque mouton listé.',
    },
    {
      question: 'Comment contacter le support?',
      answer: 'Vous pouvez nous contacter au numéro suivant : +221 77 123 45 67 ou par email à support@guett-gui.com.',
    },
  ];

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Support et Assistance</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Vidéos explicatives</h3>
          <ul className="list-disc ml-6">
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Comment ajouter un mouton
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Comment vérifier l'état de santé
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Comment contacter le support
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl font-semibold">{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
          <p>Pour toute assistance, vous pouvez nous contacter au :</p>
          <p className="font-semibold">+221 77 123 45 67</p>
          <p>ou par email à :</p>
          <p className="font-semibold">support@guett-gui.com</p>
        </div>
      </div>
    </section>
  );
};

export default Support;
