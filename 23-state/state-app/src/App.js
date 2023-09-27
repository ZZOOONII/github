import React from 'react';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import ClassState from './ClassState';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction /> {/* SayFunction 컴포넌트를 여기에서 사용합니다. */}
      <hr />
      <CounterFunction value={'Plus 1'} /> <hr />
      <hr />
      <ClassState value={'Plus 2'} /> <hr />
      <hr />
    </div>
  );
}

export default App;
