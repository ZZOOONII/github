const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body); //(id:'minion' pw: '4321')

  const fileName = req.file.filename;
  const filePath = "/" + req.file.destination + fileName;
  res.render("result", { user: req.body, filePath });
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
