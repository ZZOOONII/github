const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user");
app.use("/", userRouter);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
