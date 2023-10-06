import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import Ex1 from './Ex1';
import LifeCycleFunc from './LifeCycleFunc';
import LifeCycleFuncChild from './LifeCycleFuncChild';
import LifeCycleClassChild from './LifeCycleClassChild';
import Ex2 from './Ex2';
import PostItem from './PostItem';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      {/* 함수형 컴포넌트; useRef()로 DOM 요소에 직접 접근 */}
      <RefSample1 />
      <hr />
      {/* 함수형 컴포넌트; useRef()로 로컬변수 사용 */}
      <RefSample2 />
      <hr />
      {/* 클래스형 컴포넌트; ref()로 사용방법 1. 콜백함수 */}
      <RefSample3 />
      <hr />
      {/* 클래스형 컴포넌트; ref()로 사용방법 2. createRef() */}
      <RefSample4 />
      <hr />
      {/* 실습 */}
      <Ex1 />
      <hr />
      {/*  */}
      <LifeCycleFunc />
      <hr />
      {/* */}
      <LifeCycleFuncChild />
      <hr />
      {/*  */}
      <LifeCycleClassChild />
      <hr />
      <hr />
      <hr />
      {/* 실습2  */}
      <Ex2 />
      {/* 실습3  */}
      <PostList />
      <PostItem />
    </div>
  );
}

export default App;
