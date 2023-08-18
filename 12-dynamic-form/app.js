const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// GET / 경로: 요청시 main 페이지 보여주기
app.get("/", (req, res) => {
  res.render("dynamic");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`${PORT} is opening!`);
});

// 리더님꺼
// const express = require('express');
// const app = express();
// const PORT = 8000;

// app.set('view engine', 'ejs');
// app.use('/views', express.static(__dirname + '/views'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.render('dynamic');
// });

// app.listen(PORT, function () {
//   console.log(`Port ${PORT} is opening!`);
// });
