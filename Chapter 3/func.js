const { odd, even } = require("./var"); // 모듈 불러오기

function checkOddEven(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}

module.exports = checkOddEven; // 모듈에는 객체만 대입할 수 있는게 아닌, 함수나 변수를 대입해도 무방하다.
