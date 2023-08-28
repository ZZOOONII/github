const User = require('../model/User');
console.log(User);
// {
//   users: 'apple//1234//사과사과\nbanana//4321//바나나나나\nhappy//qwer1234//해피해피'
// }

exports.main = (req, res) => {
  res.render('index', { title: '동적 폼 실습' });
};

// exports.practice1 = (req, res) => {
//   console.log(req.body); // { userId: 'a', userPw: 'e' }

//   const userData = User.getUserInfo();
//   console.log(userData); // { realId: 'banana', realPw: '4321' }

//   if (
//     userData.realId === req.body.userId &&
//     userData.realPw === req.body.userPw
//   ) {
//     res.send({ userId: userData.realId, isSuccess: true });
//   } else {
//     res.send({ isSuccess: false });
//   }
// };

// [추가 실습] 풀이
exports.practice1 = (req, res) => {
  // 사용자가 폼에 입력한 값
  // { userId: 'banana', userPw: '4321' }
  console.log('req.body: ', req.body);

  // (임시) DB로부터 가져온 회원정보
  // { realId: 'banana', realPw: '4321' };
  console.log('User.users: ', User.users);
  const userDatas = User.users.split('\n');
  console.log(userDatas);

  const users = []; // 유저 배열
  const userIds = []; // 유저 아이디 배열
  for (let user of userDatas) {
    users.push({
      realId: user.split('//')[0],
      realPw: user.split('//')[1],
      name: user.split('//')[2],
    });
    userIds.push(user.split('//')[0]);
  }
  console.log(users);
  console.log(userIds);

  const idx = userIds.indexOf(req.body.userId);
  if (idx >= 0) {
    console.log('아이디 있음');
    console.log(users[idx]);
    console.log(users[idx].realId);
    console.log(users[idx].realPw);
    if (users[idx].realPw === req.body.userPw) {
      console.log('비밀번호 일치');
      res.send({ userInfo: users[idx], isSuccess: true });
    } else {
      console.log('비밀번호 불일치');
      res.send({ isSuccess: false });
    }
  } else {
    console.log('아이디 없음');
    res.send({ isSuccess: false });
  }
};

// 연습 코드
// const usersModel = `apple//1234//사과사과
// banana//4321//바나나나나
// happy//qwer1234//해피해피`;

// const userDatas = usersModel.split('\n')
// console.log(userDatas);

// const users = [];
// const userIds = [];
// for (let user of userDatas) {
//     console.log(user)
//     users.push({
//         realId: user.split('//')[0],
//         realPw: user.split('//')[1],
//         name: user.split('//')[2],
//     })
//     userIds.push(user.split('//')[0]);
// }
// console.log(users)
// console.log(userIds)

// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.indexOf('apple')); // 0
// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('cherry')); // 2
// console.log(fruits.indexOf('orange')); // -1
// console.log(fruits.indexOf('coke')); // -1
