import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  state = { page: 0 };

  onPageChange({ target }) {
    this.setState(prevState => ({
      page: target.name === 'next' ? prevState.page + 1 : prevState.page - 1,
    }));
  }

  render() {
    const { items } = this.props;
    const { page } = this.state;

    return (
      <div className={styles.reader}>
        <Controls
          items={items}
          page={page}
          onPageChange={e => this.onPageChange(e)}
        />
        <Counter items={items} page={page} />
        <Publication items={items} page={page} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
