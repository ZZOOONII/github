///////////////////////////////////
// 1. 실습 Callback -> Promise
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// promise
// call("kim")
//   .then(function (result) {
//     console.log(result + "반가워");
//     return back(result);
//   })
//   .then(function (result) {
//     console.log(`${result}을 실행했구나`);
//     return hell(result);
//   })
//   .then(function (result) {
//     console.log(`여기는 ${result}`);
//   });

// 2. 실습 Promise -> async/await
async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");
  let txt = await back();
  console.log(`${result}을 실행했구나`);
  let message = await hell();
  console.log(`여기는 ${result}`);
}

exec();
