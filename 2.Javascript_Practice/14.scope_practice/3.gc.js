//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

//글로벌 변수는 앱이 종료될때까지 계속 메모리애 유지됨!
const global = 1;
{
  //블럭 내부에서만 존재하고, 블럭이 끝나면 Garbage Collection로인해 자동으로 소멸됨
  const local = 1;
}
//블럭이 끝난후 바로 GC가 실행되는것이 아니라 일정한 시간을 가지고 주기적으로 청소를함

function print() {
  //함수 내부에서도 블럭안에서 필요한 경우에는
  //필요한곳에서 블럭 안에서 변수를 선언하고 사용해야함
  if (true) {
    let temp = 0;
  }
}
