import React, { useState } from 'react';

const EventEx = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: '코디',
      email: 'aaa@naver.com',
    },
    {
      id: 2,
      name: '가나다',
      email: '3333@naver.com',
    },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const [nextId, setNextId] = useState(3);

  const onChangeName = (e) => setInputName(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {
    const newData = data.concat({
      id: nextId,
      name: inputName,
      email: inputEmail,
    });

    setNextId(nextId + 1);
    setData(newData);
    setInputName('');
    setInputEmail('');
  };

  const KeyPress = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  const dataList = data.map((data) => (
    <h2 key={data.id}>
      {data.name}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={inputName}
        onChange={onChangeName}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={KeyPress} // Enter 키 이벤트 처리
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default EventEx;
