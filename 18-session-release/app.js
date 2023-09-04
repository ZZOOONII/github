const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록
app.use(
  session({
    secret: "MySessionSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 1m
    },
  })
);

// 정답 id, pw
const userInfo = { id: "banana", pw: "1234" };

// GET / 요청시; 세션의 user 키 값 확인 (req.session.user)
app.get("/", (req, res) => {
  // 세션에서 user 키 값을 확인
  const user = req.session.user;
  // 세션에 user 키가 존재하는 경우
  if (req.session.userID) {
    // isLogin을 true로 설정하고 user를 user로 만들어서 전달
    res.render("index", { isLogin: true, userID: req.session.userID });
  } else {
    // 세션에 user 키가 없는 경우 isLogin을 false로 설정하여 전달
    res.render("index", { isLogin: false });
  }
});

// GET /login 요청시; login.ejs 랜더
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // TODO: 정답 아이디와 폼에 입력된 아이디, 정답 비밀번호와 폼에 입력된 비밀번호 비교

  console.log(req.body);
  const { id, pw } = req.body;
  if (id === userInfo.id && pw === userInfo.pw) {
    req.session.userID = userInfo.id;
    res.redirect("./");
  } else {
    // 로그인 실패: 클라이언트에게 알림 제공
    res.send(failureScript);
    const failureScript = `
      <script>
        alert("로그인 실패. 올바른 아이디와 비밀번호를 입력하세요.");
        window.location.href = "/";
      </script>
    `;
  }
});

// GET /logout 요청시;
app.get("/logout", (req, res) => {
  // TODO: 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("./");
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
