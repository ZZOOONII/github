import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box2: {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box3: {number}</h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  );
};

export default App;
