import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onPageChange, page, items }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="back"
      disabled={!page}
      className={styles.button}
      onClick={onPageChange}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      disabled={page === items.length - 1}
      className={styles.button}
      onClick={onPageChange}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Controls;
