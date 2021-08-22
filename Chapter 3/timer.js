const timeOut = setTimeout(() => {
  console.log("1초 뒤에 실행");
}, 1000);

console.log(timeOut);

clearTimeout(timeOut);
