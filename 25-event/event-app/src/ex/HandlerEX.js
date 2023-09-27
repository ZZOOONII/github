import React, { Component } from 'react';

class HandlerEX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World!',
    };
  }

  handleClick = () => {
    this.setState({
      message: 'Goodbye World!',
    });
  };
  render() {
    return (
      <div>
        <h1>Handler_ex Component Event</h1>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}

export default HandlerEX;
