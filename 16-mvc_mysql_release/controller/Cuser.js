// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getUsers = (req, res) => {
  User.getUsers((result) => {
    console.log("controller >>", result);
    res.render("User", { data: result });
  });
};
