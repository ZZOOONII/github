import React, { Component } from 'react';

class Test extends Component {
  name = '한지윤';
  my_style = {
    backgroundColor: 'blue', // 배경색상
    color: 'orange', // 글자색상
    fontSize: '40px', // 글자크기
    padding: '12px', // 패딩
  };

  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
}

export default Test;
