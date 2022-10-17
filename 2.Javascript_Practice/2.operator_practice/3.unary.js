//단항연산자 Unary Operators
// +(양)
// -(음)
// !(부정)

let a = 5;
a = -a; //-1*5
console.log(a);
a = -a; //-1*-1*5
console.log(a);

a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean); // 부정연산자
console.log(!!boolean); // 값을 boolean 타입으로 변환함!

console.log(+''); // 0
console.log(+0); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
