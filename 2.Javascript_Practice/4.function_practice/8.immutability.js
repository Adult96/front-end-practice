//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은❌ 좋은 습관이 아님
//상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 변환해야 한다
//원시값 -> 값에 의한 복사
//객체값 -> 참조에 의한 복사(메모리 주소)
function display(num) {
  num = 5; //❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

//심각한 예제❗️
function displayObj(obj) {
  obj.name = 'jiwoo'; //❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하면 전역변수의 인자도 변경된다
  console.log(obj);
}

const sungin = { name: 'Sugnin' };
displayObj(sungin);
console.log(sungin);

function changeName(obj) {
  //이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'bob' }; //변환 할때는 새로운 오브젝트 만들기
}
