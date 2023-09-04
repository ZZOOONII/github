const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());
<<<<<<< HEAD
const mycookieConf = {
  httpOnly: true,
  maxAge: 20 * 1000,
  signed: true,
=======
const myCookieConf = {
  httpOnly: true,
  maxAge: 86400 * 1000, // 1day
>>>>>>> 78e2708f973d073c0b689a64a43552c6a6cd76de
};

app.get("/", (req, res) => {
  // *다음과 같이 기능 구현하였는데, 굳이 이렇게 하지 않아도 됩니다.
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  // console.log('req.cookies.popup >> ', req.cookies.popup);

  // TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
<<<<<<< HEAD

  app.get("/setCookie", (req, res) => {
    // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)
    res.cookie("myCookie", "myValue", mycookieConf);
    res.send("Cookie 설정 완료!");
  });

  const popup = req.cookies.popup;
  res.render("index", {});
=======
  const popup = req.cookies.popup;
  res.render("index", { popup });
>>>>>>> 78e2708f973d073c0b689a64a43552c6a6cd76de
});

app.post("/setcookie", (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
<<<<<<< HEAD
  res.cookie("popup", "hide", mycookieConf);
=======
  res.cookie("popup", "hide", myCookieConf);

>>>>>>> 78e2708f973d073c0b689a64a43552c6a6cd76de
  res.send("쿠키 설정 성공!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
