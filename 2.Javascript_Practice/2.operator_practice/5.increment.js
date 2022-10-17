//증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; //1씩 증가
console.log(a);
a--; //1씩 감소
console.log(a);

//주의 사항!
//a++ 필요한 연산을 하고. 그 뒤 값을 증가시킴
//++a 값을 먼저 증가하고. 필요한 연산을함

a = 0;
let b = a++;
console.log(a); //1
console.log(b); //0

a = 0;
b = ++a;
console.log(a); //1
console.log(b); //1

a = 0;
console.log(a++); //0 로그를 출력후 값증가
console.log(a); //1

a = 0;
console.log(++a); //1 값증가 후 로그를 출력
