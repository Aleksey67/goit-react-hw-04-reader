import { Component } from 'react';

export default class NoMatch extends Component {
  componentDidMount() {
    this.props.history.push({
      pathname: '/reader',
    });
  }

  render() {
    return '';
  }
}
