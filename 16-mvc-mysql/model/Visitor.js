// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");

// db 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "sesac",
});

exports.getVisitors = (callback) => {
  //  [BEFORE]
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다." },
  //     { id: 2, name: "이찬혁", comment: "으라차차" },
  //   ];

  // [AFTER]
  conn.query("select * from visitor", (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model >>", rows);
    callback(rows);
  });
};
