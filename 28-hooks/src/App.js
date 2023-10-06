import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEX from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import useToggle from './hooks/useToggle';

function App() {
  useTitle('React Hooks 연습중입니당');
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />

      <hr />
      <UseCallbackEx2 postId={7} />
      <hr />
      <useToggle />
      <hr />
      <UseReducerEX />
    </div>
  );
}

export default App;
