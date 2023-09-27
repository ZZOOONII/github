import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import HandlerEX from './ex/HandlerEX';
import UseState from './ex/UseState';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEX />
      <hr />
      <UseState />
    </div>
  );
}

export default App;
