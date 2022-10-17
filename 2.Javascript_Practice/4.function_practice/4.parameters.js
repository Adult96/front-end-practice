//매개변수의 기본값은 무조건 undifined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments); //arguments를쓰면 받은 인자를 확인할수 있다.
  console.log(arguments[0]); //arguments를쓰면 받은 인자를 확인할수 있다.
  return a + b;
}
add(1, 2, 3);

function add(a = 1, b = 2) {
  //아무런 인자를 받지 않았을때 매개변수에 할당한 값이 들어감
  console.log(a);
  console.log(b);
  return a + b;
}
add();

function add(a = 1, b = 2) {
  //매개변수에 할당한 값이 있는데 함수 호출에서 인자를 받으면 받은 인자가 우선시됨
  console.log(a);
  console.log(b);
  return a + b;
}
add(2, 2);

//Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  //할당할 인자의 숫자가 정해저 있지 않다면 ...numbers를 붙힌다 매개변수 a,b를 제외한 나머지 매개변수는 배열로 받아온다
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);
