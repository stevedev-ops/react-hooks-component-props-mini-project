// src/components/Article.js
import React from 'react';

const Article = ({ title, date, preview }) => {
  const defaultDate = 'January 1, 1970';
  const displayDate = date || defaultDate;

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;