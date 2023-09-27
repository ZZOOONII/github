import React, { Component } from 'react';
import propTypes from 'prop-types';

// class ClassComponent extends React.Component {
class ClassComponent extends Component {
  student = '홍길동';
  // 클래스형 컴포넌트는 render 함수 필수
  render() {
    const { name } = this.props;
    console.log('props:', this.props);
    return (
      <div>
        <h1>Hi {this.student}!</h1>
        <p>여기는 Class Component!</p>
        {/* <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p> */}
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  //   static defaultProps = {
  //     name: '기본 이름',
  //   };
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}

// ClassComponent.defaultProps = {
//   name: '기본 이름',
// };

// default도 없어야 isRequired동작함
ClassComponent.propTypes = {
  name: propTypes.string.isRequired,
};

export default ClassComponent;
