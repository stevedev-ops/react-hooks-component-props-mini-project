import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const defaultDate = 'January 1, 1970';
  const displayDate = date || defaultDate;

  const getReadingTime = (minutes) => {
    if (!minutes) return '';

    let emoji = '';
    let count = Math.ceil(minutes / (minutes < 30 ? 5 : 10));

    if (minutes < 30) {
      emoji = '☕️'.repeat(count);
    } else {
      emoji = '🍱'.repeat(count);
    }

    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      <p>{getReadingTime(minutes)}</p>
    </article>
  );
};

export default Article;
