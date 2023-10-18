import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
import { plus, minus } from '../store/counterReducer';

export const Box1Container = () => {
  return <Box1 />;
};

export const Box2Container = () => {
  return <Box2 />;
};

export const Box3Container = () => {
  return <Box3 />;
};

export const Box4Container = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  //   plus() // {type:'counter/'PLUS'}
  //   dispatch({type:})

  return (
    <Box4
      number={number}
      onPlus={() => dispatch(plus())}
      onMinus={() => dispatch(minus())}
    />
  );
};

// export default App;
