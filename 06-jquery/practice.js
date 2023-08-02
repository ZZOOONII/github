// TODO: 조건을 만족하는 jquery 코드 작성

// console.log($('.btn')); // 유사 배열
// jQuery 는 js와 다르게 배열 형태더라도 그냥 바로 이벤트 적용 가능!!
$(".apple").on("click", function () {
  $(".fruit").attr("src", "./image/apple.jpg");
});

$(".bananas").on("click", function () {
  $(".fruit").attr("src", "./image/bananas.jpg");
});

$(".grapes").on("click", function () {
  $(".fruit").attr("src", "./image/grapes.jpg");
});

$(".peaches").on("click", function () {
  $(".fruit").attr("src", "./image/peaches.jpg");
});
