// src/components/About.js
import React from 'react';

const About = ({ image, about }) => {
  const defaultImage = 'https://via.placeholder.com/215';
  const imgSrc = image || defaultImage;

  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;