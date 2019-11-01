import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
    };
  }

  onPageChange(inc) {
    const { items } = this.props;

    this.setState(prevState => {
      let page = prevState.page + inc;
      if (page >= items.length) {
        page = 0;
      } else if (page < 0) {
        page = items.length - 1;
      }
      return { page };
    });
  }

  render() {
    const { items } = this.props;
    const { page } = this.state;

    return (
      <div className={styles.reader}>
        <Controls
          items={items}
          page={page}
          onPageChange={inc => this.onPageChange(inc)}
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
