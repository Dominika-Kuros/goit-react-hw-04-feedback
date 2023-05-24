import { Component } from 'react';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    contents: [],
  };
  static propTypes = {
    contents: Array,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  reset() {
    this.setState(this.state);
  }

  render() {
    return (
      <>
        <h1> Please leave feedback</h1>
        <button onClick={() => this.state.good()}> Good </button>
        <button onClick={() => this.state.neutral()}> Neutral </button>
        <button onClick={() => this.state.bad()}> Bad </button>
        <h1> Statistics</h1>
        <p>Good: </p> <p>Neutral: </p>
        <p>Bad: </p>
      </>
    );
  }
}
