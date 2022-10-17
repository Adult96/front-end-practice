//함수가 중첩 되어있을때 내부 함수가 외부함수의 렉시컬 환경에 접근이 가능한것

//전역 스코프 / 외부 렉시컬 환경 참조 / 환경 레코드 : /전역 렉시컬 환경
function outer() {
  //outer 스코프 / 외부 렉시컬 환경 참조 / 환경 레코드 : x =0 /outer 렉시컬 환경
  const x = 1;
  function inner() {
    //inner 스코프 / 외부 렉시컬 환경 참조 / 환경 레코드 : /inner 렉시컬 환경
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const func1 = outer();
func1();

//외부 렉시컬 환경참조(inner 렉시컬 환경) ➡️ outer 렉시컬 환경 , 외부렉시컬 환경 참조 ➡️ 전역렉시컬 환경
