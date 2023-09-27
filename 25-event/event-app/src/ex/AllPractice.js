import React, { Component } from 'react';
import apple from './apple.png';
import banana from './banana.png';
import orange from './orange.png';
import peach from './peach.png';

class Test2 extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: 20,
  };

  render() {
    return (
      <div style={this.style}>
        {' '}
        {/* 수정: this.style로 접근 */}
        <h2>안녕하세요</h2>
        <img src={kitty} alt="Kitty" />{' '}
        {/* alt 속성을 추가하여 이미지에 대한 설명을 제공*/}
      </div>
    );
  }
}

export default Test2;
