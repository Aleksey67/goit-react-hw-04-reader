import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ items, page }) => {
  const item = items[page];

  return (
    <article className={styles.publication}>
      <h2>
        {page + 1}. {item.title}
      </h2>
      <p>{item.text}</p>
    </article>
  );
};

export default Publication;

Publication.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};
