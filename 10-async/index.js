// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

///////////////////////
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다..");
// }

// function pickDrink() {
//   setTimeout(function () {
//     console.log("고민 끝!!!");
//     product = "제로콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log("상품명: ${product}, 가격: ${price}");
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay();

//////////////////////////////////////////////////////////////////

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다..");
}

function pickDrink(callback) {
  // *callback 매개변수 : 콜백함수를 의미
  // 3초 기다린 후에 코드 실행 ( = 3초 고민함 )
  setTimeout(function () {
    console.log("고민 끝!!!");
    product = "제로콜라";
    price = 2000;
    callback(product, price); // *매개변수로 넘긴 콜백함수 실행
  }, 3000);
}

let product;
let price;
goMart();
pickDrink(function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
});
