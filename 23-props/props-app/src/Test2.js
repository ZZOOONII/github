import React, { Component } from 'react';
import kitty from './kitty.jpg';

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
        {/* alt 속성을 추가하여 이미지에 대한 설명을 제공합니다. */}
      </div>
    );
  }
}

export default Test2;
