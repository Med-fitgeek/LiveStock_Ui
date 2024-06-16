import React from 'react';
import { FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'health', message: 'Mouton 2 est malade', date: '2024-06-14' },
    { id: 2, type: 'task', message: 'Vaccination des moutons prévue demain', date: '2024-06-15' },
    { id: 3, type: 'task', message: 'Alimentation des moutons à faire aujourd\'hui', date: '2024-06-14' },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'health':
        return <FaExclamationCircle className="text-red-600" />;
      case 'task':
        return <FaInfoCircle className="text-blue-600" />;
      default:
        return <FaInfoCircle />;
    }
  };

  const getNotificationClass = (type) => {
    switch (type) {
      case 'health':
        return 'bg-red-100 border-red-400';
      case 'task':
        return 'bg-blue-100 border-blue-400';
      default:
        return 'bg-gray-100 border-gray-400';
    }
  };

  return (
    <section className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`mb-2 p-4 border-l-4 rounded shadow ${getNotificationClass(notification.type)}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {getNotificationIcon(notification.type)}
                  <span className="ml-2">{notification.message}</span>
                </div>
                <span>{notification.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
