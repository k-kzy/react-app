import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // +1 カウントアップ
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1});
  }

  // -1 カウントダウン
  handleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <React.Fragment>
        <div>count： { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    );
  }
}

export default App;