//실행 컨텍스트 (Execution Context)
//코드의 실행 순서와 스코프를 기억함

//각각의 블록은 렉시컬 환경 이라는 내부 오브젝트를 가지고 있다
const a = 1; //전역 스코프 /환경 레코드 : a = 1; /외부 렉시컬 환경참조
{
  const a = 2; //블럭 1 지역스코프 /환경 레코드 : a = 2; /외부 렉시컬 환경참조: 전역스코프
  {
    const a = 3; // 블럭 2 지역스코프 /환경 레코드 : a = 3; /외부 렉시컬 환경참조: 블럭1 지역스코프
  }
}

//블럭 2 지역스코프에  const a = 3;라고 선언이 안되어있으면 외부 렉시컬 환경 참조로 인해 블럭1 지역스코프에 있는 const a = 2;를 참조한다
