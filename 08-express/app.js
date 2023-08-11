const express = require("express");
const app = express();
const PORT = 8080;

// console.log(__dirname);
// console.log(__dirname + "/static"); //

app.set("view engine", "ejs"); // express에서 사용할 템플릿 엔진 종류 등록
app.set("views", "./views"); // 템플릿 엔진 파일을 저장할 위치 등록
// static 미들웨어 등록
app.use("/public", express.static(__dirname + "/static")); // 미들웨어 등록

// (임시) 데이터베이스에서 가져온 회원 정보(id, pw)
const idFromDB = "banana";
const pwFromDB = "1234pwer";

// app.get(path, callback())
// '/': 서버주소:포트번호/ → (localhost:8080/)
app.get("/", function (request, response) {
  // response.send(str): str(문자열)을 클라이언트에게 응답으로 보내줌
  //   response.send('<h1>Hello World!</h1>');

  // response.render(ejs_filename): ejs file 이름을 찾아서 응답 → app.set()으로 설정해줘야 함
  response.render("index", {
    userID: idFromDB,
    userPW: pwFromDB,
    btns: ["사과", "오렌지", "키위"],
    me: {
      name: "zzooonii",
      msg: "저는 지윤입니다. 반갑습니다!!!",
    },
    isLogin: true,
  });
});

// '/sesac' 경로로 들어왔을 때, "새싹 영등포캠퍼스 5기 수업중" 메시지 보이기
// 서버주소:포트번호/sesac → (localhost:8080/sesac)
app.get("/sesac", function (request, response) {
  //   response.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
  response.render("sesac");
});

// Quiz 1.
// /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get("/login", function (request, response) {
  response.render("login");
});

// Quiz 2.
// /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get("/register", function (request, response) {
  response.render("register");
});

// app.listen(port, callback())
app.listen(PORT, function () {
  console.log(`server listening on http://localhost:${PORT} port`);
});
