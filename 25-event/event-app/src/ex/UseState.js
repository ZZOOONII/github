import { useState } from 'react';

// const ColorChange = () => {
//   const [msg, setMsg] = useState('검정색 글씨');
//   const [color, setColor] = useState('black');

//   const RedChange = () => {
//     setMsg('빨간색 글씨');
//     setColor('red');
//   };

//   const BlueChange = () => {
//     setMsg('파란색 글씨');
//     setColor('blue');
//   };

const Disappear = () => {
  const [msg, setMsg] = useState('안녕하세요');
  const [btn, setBtn] = useState('사라져라');

  const DisappearText = () => {
    if (btn === '사라져라') {
      setMsg('');
    }
  };

  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={() => DisappearText()}>{btn}</button>
    </div>
  );
};

export default Disappear;
