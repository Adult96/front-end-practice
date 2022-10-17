//callstack,single thread
//자바 스크립트는 기본적으로 동기적으로 시행됌 무거운작업 실행하면 좋지않음

function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}
