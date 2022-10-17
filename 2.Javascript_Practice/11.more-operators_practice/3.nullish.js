//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

//Nullish Coalescing Operator
//ES11 (ECMAScript 2020)
//?? null,undifinede

//falshy한 경우 설정(할당) 0,-0,null,undifine,''
const num = 0;
let num2;
console.log(num || '-1'); //-1   num이 0이어서 false로 나옴
console.log(num2 ?? '-1'); //-1
