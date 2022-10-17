function loop() {
  const array = [];
  //let과 var의 차이점
  // for (var i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

//let은 블록 스코프 여서
//0
//1
//2
//3
//4
//이 출력 되지만

//var는 함수 스코프 즉
// function (){
// var i;
//for(i = 0;)
// }
//와 같은 상태 이기때문에

//5가 출력된다
