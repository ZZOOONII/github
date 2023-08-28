// (임시) DB로부터 가져온 회원 정보
exports.getUserInfo = () => {
  return {
    realId: 'banana',
    realPw: '4321',
  };
};

// [추가실습]
exports.users = `apple//1234//사과사과
banana//4321//바나나나나
happy//qwer1234//해피해피`;
