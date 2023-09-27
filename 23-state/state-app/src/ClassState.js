import React, { Component } from 'react';

class ClassState extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        {/* <h1>{this.state.number}</h1> */}
        <button
          onClick={() => {
            // 직접 변경 불가능, setState 사용해야 함
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            // 직접 변경 불가능, setState 사용해야 함
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default ClassState;
