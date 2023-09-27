import propTypes from 'prop-types';

export default function FunctionComponent({ name }) {
  const student = '홍길동';
  //   const { name } = props;
  return (
    <div>
      <h1>Hi {student}!</h1>
      <p>여기는 FunctionComponent</p>
      {/* <p>
            새로운 컴포넌트의 이름은 <b>{props.name}</b>
        </p> */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본 이름',
};

FunctionComponent.propTypes = {
  name: propTypes.string,
};
