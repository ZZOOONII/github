const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("dynamic");
});

app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  res.send({ name: req.body.name, gender: req.body.gender, msg: "반가워!!" });
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
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
