import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onPageChange }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={() => onPageChange(-1)}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={() => onPageChange(1)}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Controls;
