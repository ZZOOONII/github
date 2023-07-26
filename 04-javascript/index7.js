// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0~9 총 10번 반복
  console.log("안녕", i);
}

// i += 2 / i = i +2
for (let i = 0; i < 10; i += 2) {
  // i가 0~9 총 10번 반복
  console.log("안녕", i);
}

// 1~5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("--------");

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("--------");

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  sum = sum + i; // sum += i
  console.log(i, sum);
}
// console.log(sum);
console.log("---------");

// 배열, for문
const fruits = ["사과", "배", "포도", "망고"];
console.log(fruits.length); // 배열의 원소 개수 = 배열 크기(길이)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1~20 중에서 짝수일 때의 합 구하기
let sum2 = 0; // 합을 의미하는 변수
// - 1~20까지 숫자를 반복
// - 현재 숫자가 짝수라면 sum2에 더하기
for (let i = 1; i <= 20; i++) {
  // console.log(i);

  if (i % 2 === 0) {
    sum2 = sum2 + i;
    console.log(i, sum2);
  }
}

// while문
let idx = 0;
while (idx < 10) {
  console.log("안녕", idx);
  idx = idx + 1; // idx += 1
}

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프
  // (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
  console.log("안녕", idx2);
  idx2 = idx2 + 1; // idx2 += 1

  // 무한 루프를 빠져나오는 조건
  if (idx2 === 10) {
    break;
  }
}

console.log("---------");

// continue를 이용해 0~99까지 중에서 홀수의 합
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue; // 이번 반복회차는 스킵할게요
  }

  sum3 = sum3 + i;
  console.log(i, sum3);
}
