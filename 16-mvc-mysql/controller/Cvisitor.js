const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [BEFORE]
  // res.render("visitor", { data: Visitor.getVisitors() });

  // [AFTER]
  // console.log(Visitor.getVisitors());
  Visitor.getVisitors((result) => {
    console.log("controller >>", result);
    res.render("visitor", { data: result });
  });
};
