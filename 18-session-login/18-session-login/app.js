const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 1m
    },
  })
);

// TODO: express-session 미들웨어 등록

// 정답 id, pw
const userInfo = { id: 'banana', pw: '1234' };

// GET / 요청시; 세션의 user 키 값 확인 (req.session.user)
app.get('/', (req, res) => {
  // user 키 값 있다면; index.ejs 랜더 + isLosgin 을 true 로 user를 user 로 만들어서 전달
  if (req.session.userId) {
    res.render('index', { isLogin: true, userId: req.session.userId });
  } else {
    res.render('index', { isLogin: false });
  }
  // user 키 값 없다면; index.ejs 랜더 + isLosgin 을 false 로 하여 전달
});

// GET /login 요청시; login.ejs 랜더
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login 요청시;
app.post('/login', (req, res) => {
  // TODO: 정답 아이디와 폼에 적힌 아이디, 정답 비번과 폼에 적힌 비번 비교
  // 같다면 (로그인 통과); 세션에 user 키로 아이디를 저장
  console.log(req.body);
  const { id, pw } = req.body;
  if (id === userInfo.id && pw === userInfo.pw) {
    req.session.userId = userInfo.id;
    res.redirect('./');
    // res.send({ id: req.sessionID, name: req.session.userId });
  } else {
    res.send("<script>alert('아이디나 비밀번호가 틀렸습니다.'); document.location.href = '/';</script>");
  }
  // 틀리면 (로그인 실패); send() 메서드를 이용해 script 전송 (로그인 실패 alert & 브라우저 경로 홈으로 이동)
  // 참고 res.send(<script>...</script>) front js 코드 전송 가능
});

// GET /logout 요청시;
app.get('/logout', (req, res) => {
  // TODO: 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }

    // res.redirect(주소): 주소로 이동(리다이렉트)
    res.redirect('./'); // 세션 확인
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.session: 사용자별로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값

// 세션쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백)
