//MDN while: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while

//while(조건){}
//조건이 false가 될때까지 {}코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있다');
  if (i === 10) {
    break;
  }
  i++;
}

do {
  //do{}while()은 조건이 맞지 않아도 꼭1번은 실행이 되어야할때 쓴다
  console.log('아직 살아있다');
} while (isActive);
