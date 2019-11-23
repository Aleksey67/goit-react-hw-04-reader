import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import queryString from 'query-string';
import styles from './Reader.module.css';

export default class Reader extends Component {
  componentDidMount() {
    const queryParams = this.getQueryParams();
    if (!queryParams.item) {
      this.props.history.push({
        pathname: '/reader',
        search: 'item=1',
      });
    }
  }

  getQueryParams() {
    return queryString.parse(this.props.location.search);
  }

  onPageChange({ target }) {
    const queryParams = this.getQueryParams();
    const item = parseInt(queryParams.item) + (target.name === 'next' ? 1 : -1);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `item=${item}`,
    });
  }

  render() {
    const { items } = this.props;
    let page = parseInt(this.getQueryParams().item) - 1;
    if (isNaN(page)) {
      page = 0;
    }

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
