const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();

const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8888;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록

// TODO: routes/user 요청 경로 분리
// [라우터 분리]
const indexRoutes = require("./routes");
app.use("/", indexRoutes);

// TODO: 404 처리
// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
