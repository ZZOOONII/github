console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById / 아이디 속성값
console.log(document.getElementById("green")); //아이디 속성값
console.log(document.getElementById("red"));

// 2. getElementsByClassName / 클래스 속성값
console.log(document.getElementsByClassName("pink")); // 유사배열
console.log(document.getElementsByClassName("pink")[1]);

// 3. getElementsByTagName / 태그 이름
console.log(document.getElementsByTagName("div"));

// 4. getElementsByName / name 속성값
console.log(document.getElementsByName("id"));

// 5. querySelector(css selector) / css 선택자
// : 처음 발견한 하나만 가지고 옴
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));

// 6. document.querySelectorAll(css selector)
// : 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("#green"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

// 유사배열 (HTMLCollection, NodeList)
// [] 식으로 생긴 배열을 의미, 배열은 아님!!
// index, length는 가짐..(?)
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll(".pink").forEach((elem) => console.log(elem));

// HTMLCollection -> forEach() 메서드 사용 x
// 반복을 해야된다? Array 변경 (Array.from())
Array.from(document.getElementsByClassName("pink")).forEach((elem) =>
  console.log(elem)
);

// for of 반복문도 가능~
const pinks = document.querySelectorAll(".pink");
for (let pink of pinks) {
  console.log(pink);
}
