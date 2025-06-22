import React, { useState } from 'react';

const HoverProfileImage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mx-auto my-8 w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-accent-500 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={hovered ? '/selfie2.jpg' : '/selfie1.jpg'}
        alt="Abhikalp Srivastava"
        className="object-cover w-full h-full transition-all duration-300"
      />
    </div>
  );
};

export default HoverProfileImage; 