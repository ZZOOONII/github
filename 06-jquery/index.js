// jQuery
// $(선택자).동작함수()
// $(): HTML 요소를 선택하는 함수
// 동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($("#div1"));

function submitJs() {
  // 요소 선택
  const div1 = document.getElementById("div1");

  // div 내용을 변경
  div1.innerText = "반갑습니다!";

  // div border style 추가
  div1.setAttribute("style", "border: 2px solid red;");
}

function submitJquery() {
  // 요소 선택
  const div1 = $("#div1");

  // div 내용을 변경
  div1.text("안녕히계세요~");

  // div border style 추가
  div1.css("border", "2px dotted blue");
}

const colorsJs = document.querySelectorAll(".color");
const colorsJquery = $(".color");

console.log(colorsJs); // nodelist
console.log(colorsJquery); // jquery 객체

// js li 요소 클릭시 글씨 색상 빨간색
colorsJs.forEach((item) => {
  item.addEventListener("click", () => {
    // console.log(this) // 자기자신 (item)
    this.style.color = "red";
    this.style.fontSize = "20px";
  });
});

// Error: 유사 객체에 이벤트리스너를 추가하려고 했기 때문!
// 각 요소에 대해 이벤트리스너를 추가해야 하므로 반복해야함~
// colorsJs.addEventListener('click', () => {
//   colorsJs.style.color = 'red';
// });

// jquery li 요소 크릭시 배경 색상 하늘색
colorsJquery.on("click", function () {
  // console.log($(this));
  $(this).css("background-color", "skyblue");
});
