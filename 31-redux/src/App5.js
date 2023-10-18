import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';

function App() {
  const [number, setNum] = useState('0');
  const money = useSelector((state) => state.money.value);
  const dispatch = useDispatch();

  const onPlus = () => {
    // 입금
    dispatch({ type: 'DEPOSIT', amount: parseInt(number) });
    setNum('');
  };

  const onMinus = () => {
    // 출금
    dispatch({ type: 'WITHDRAW', amount: parseInt(number) });
    setNum('');
  };

  const onChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Redux 실습</h1>
      <h2>잔액 :: {money}원</h2>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onPlus}>입금</button>
      <button onClick={onMinus}>출금</button>
    </div>
  );
}

export default App;
