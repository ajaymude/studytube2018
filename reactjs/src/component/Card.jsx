import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-black text-white shadow-md text-center flex items-center justify-center"
         style={{ width: '150px', height: '120px' }}>
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
  );
};

export default Card;
