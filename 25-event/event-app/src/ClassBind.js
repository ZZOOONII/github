import { Component } from 'react';
class ClassBind extends Component {
  constructor(props) {
    super(props);
    console.log('constructor this :');
    // #1 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
    // - js에서는 this 호출하는 방법에 의해 결정
    // => 함수가 호출될 때마다 this가 다를 수 있다
    // bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림

    //     this.printConsole = this.printConsole.bind(this);
    //   }

    //   printConsole() {
    //     console.log('this', this);
    //   }
  }

  // 1) bind 사용 경우
  //   printConsole() {
  //   console.log

  printConsole = () => {
    console.log('this', this);
  };

  printConsole2 = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자x)</button>
        <button onClick={() => this.printConsole2('msg')}>
          printConsole(인자o, bind)
        </button>
        <button onClick={this.printConsole2.bind(null, 'msg')}>
          printConsole(인자o, bind)
        </button>
      </div>
    );
  }
}

export default ClassBind;
