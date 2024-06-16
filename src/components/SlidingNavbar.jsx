import React, { useState } from 'react';

const SlidingNavbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div>
      <div className="overflow-x-auto bg-blue-600 text-white whitespace-nowrap">
        <div className="container mx-auto flex">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`flex-shrink-0 px-4 py-2 ${activeSection === section.id ? 'bg-blue500' : 'bg-blue-700'} hover:bg-blue-500 focus:outline-none`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.id} className={`${activeSection === section.id ? 'block' : 'hidden'}`}>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingNavbar;
