// val() - value
function getValue() {
  // js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  // jquery
  const value = $("input").val();
  alert(value);
}

function setValue() {
  // js
  //   document.querySelector('input').value = '하이하이~';

  // jquery
  $("input").val("안뇽안뇽~");
}

// css()
function changeCssJS() {
  const span = document.querySelector("span");
  span.style = "font-size: 20px; color: red";
}
function changeCssJquery() {
  // case1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case2. css 여러 속성 한번에 적용
  $("span").css({
    fontSize: "40px", // 모든 span에 대해 폰트 크기 변경
    color: "blue", // 모든 span에 대해 폰트 색상 변경
  });
}
function getCssJquery() {
  console.log(document.querySelector("span").style.color); // js
  //   console.log($('span').css('color')); // jquery
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector("a");
  a.href = "https://www.naver.com";

  // a.setAttribute('href', 'https//www.naver.com');
  // a.href = 'https://www.naver.com'
}

function changeAttrJquery() {
  $("a").html("https://naver.com");
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p = document.querySelector(".p-text");
  // p.textContent = 'js로 텍스트 변경!!'
  p.innerText = "js로 텍스트 변경!!";
  // p.innerHTML = 'js로 텍스트 변경!!';

  // span.style = "font-size: 20px; color: red"; 오답
}
function changeTextJquery() {
  $(".p-text").text("jquery로 텍스트 변경~");
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const p = document.querySelector(".p-html");
  p.innerHTML = "<h3>javascript</h3>";
}
function changeHtmlJquery() {
  $(".p-html").html("<h3>jquery</h3>");
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector(".colors");
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement("li");
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  li.innerText = "마지막 자식으로 추가된 js";
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  colors.append(li);
}

function appendJquery() {
  $(".colors").append("<li>마지막 자식으로 추가된 jquery</li>");
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  const colors = document.querySelector(".colors");
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement("li");
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  li.innerText = "첫 자식으로 추가된 js"; // <li>첫 자식으로 추가된 js</li>
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
  colors.prepend(li);
}

function prependJquery() {
  $(".colors").prepend("<li>첫 자식으로 추가된 jquery</li>");
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector(".green");
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement("li");
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = "green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)";
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  green.before(li);

  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $(".green").before("<li>바로 이전 형제 요소</li>");
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector(".green");

  // 2. li 태그 요소를 생성한 후
  const li = document.createElement("li");

  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  li.innerText = "green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)";

  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  green.after(li);

  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $(".green").after(
    "<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)</li>"
  );
}

// 요소 삭제하기
// remove()
function removeJS() {
  // li2 아이디를 갖는 요소를 선택하여 그 요소를 삭제
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

  const li2 = document.getElementById("#li2");
  li2.remove();
}

function removeJquery() {
  $("ul.nums").remove("");
}

// empty()
function emptyJS() {
  // 참고! js에는 empty 메서드가 없습니다~ 따라서 아래와 같이 코드를 적용해주세요
  // ul 태그이자 num 클래스를 갖는 요소를 선택후
  // 해당 요소의 HTML을 빈 문자열 '' 로 설정 (innerHTML)

  const nums = document.querySelector("ul.nums");
  nums.innerHTML = "";

  const ul = document.getElementById("num");
  ul.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty("");
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector(".child2").parentElement);
  console.log($(".child2").parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($(".child2").parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector(".child2").nextElementSibling);
  console.log($(".child2").next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  console.log(document.querySelector(".child2").previousElementSibling);
  console.log($(".child2").prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector(".parent").children);
  console.log($(".parent").children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   document.querySelector('#hi').classList.add('fs-50');
  $("#hi").addClass("fs-50");
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  //   document.querySelector('#hi').classList.remove('fs-50');
  $("#hi").removeClass("fs-50");
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  //   document.querySelector('#hi').classList.contains('fs-50');
  console.log($("#hi").hasClass("fs-50"));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  //   document.querySelector('#hi').classList.toggle('bg-pink');
  $("$hi").toggleClass("bg-pink");
}
