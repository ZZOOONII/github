const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

app.get('/comment/:id', (req, res) => {
  // req.params: 라우트 매개변수에 대한 정보가 담겨 있음
  console.log('req.params', req.params); // { id: '1' }
  const cmtId = Number(req.params.id); // 댓글의 고유 아이디

  //   // :id 변수에 0, 7같은 존재하지 않는 id로 접근시 404 페이지
  //   // :id 범위 1~4(comments.length)
  //   if (cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }

  //   // :id 변수에 숫자가 아닌 문자 가 온다면 404 페이지
  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
});

// param 여러개 사용 가능
app.get('/test/:id/:name', (req, res) => {
  console.log('req.params', req.params); // { id: 'banana', name: '바나나' }
  res.send('test res success!');
});

// 404 error 처리
// 반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
