// // 조건문

// // if문
// if (5 > 3) {
//   console.log("얍!");
// }

// let number = Number(prompt("숫자를 입력해주세요!"));
// // 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// // 2. Number() 문자열-> 숫자형 형변환
// // 아래와 동일한 코드
// // let number2 = prompt('숫자 입력해주세요!')
// // number2 = Number(number2)

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else {
// //   console.log('입력한 수는 10보다 작거나 같네요!');
// // }

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else if (number === 10) {
// //   console.log('입력한 수는 10이네요!');
// // } else {
// //   console.log('입력한 수는 10보다 작네요!');
// // }

// if (number > 100 || number < 0) {
//   console.log("입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100");
// } else if (number >= 90) {
//   console.log("A");
// } else if (number >= 80) {
//   console.log("B");
// } else if (number >= 70) {
//   console.log("C");
// } else if (number >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// // 중첩 if문
// let userId = "user01";
// let userPw = "1234";

// // id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt("아이디 입력");
//   let inputPw = prompt("비밀번호 입력");

//   // - userId와 inputId가 같다면
//   //    - userPw와 inputPw 를 비교
//   // - inputId에 빈값 입력됐다면
//   //    - '아이디 입력 안함' 문구 반환
//   // - 두 경우가 아니라면 (inputId가 틀렸을 때)
//   //    - '아이디 틀림' 문구 반환

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return "로그인 성공";
//     } else {
//       return "비번 오류! 로그인 실패";
//     }
//   } else if (inputId === "") {
//     return "아이디 입력 안했음";
//   } else {
//     return "아이디 오류! 로그인 실패";
//   }
// }
// const result = loginUser();
// // -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

// switch문
// - 하나 이상의 csde 문으로 구성
// - default 필수는 아니지만, 쓰길 권장
// - 여러개의 case문을 묶을 수도 있다
// break: 조건을 빠져나갈 때 사용하는 키워드
let a = 3;
switch (a) {
  case 1:
  case 2:
  case 3: // if (a === 3)
    console.log("a가 1~3이군요!");
    break;
  case 4:
    console.log("a가 4이군요!");
    break;
  case 5:
    console.log("a가 5이군요!");
    break;
  default:
    console.log("a가 무슨 값인지 모르겠습니다");
    break;
}

let score = 99;
console.log(parseInt(score / 10));
switch (parseInt(score / 10)) {
  case 10:
    console.log("a");
    break;
  case 9:
    console.log("b");
    break;
  case 8:
    console.log("b");
    break;
  case 7:
    console.log("d");
    break;
  default:
    console.log("f");
    break;
}

// 삼향 연산자
let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let now = new Date().getHours();
now > 12 ? console.log("오후") : console.log("오전");

// 반복문
