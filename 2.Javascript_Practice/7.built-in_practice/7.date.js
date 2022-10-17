//MDN Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('jun 5, 2022'));
console.log(new Date('2022-09-10T03:24:00'));

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); //0 :1,1:2...

console.log(now.getFullYear());
console.log(now.getMonth()); //0 :1,1:2...
console.log(now.getDate());
console.log(now.getDay()); //0일요일 부터, 1...6:토요일
console.log(now.getHours());
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); //ISO 8601 형식
console.log(now.toLocaleString('en-Us')); //미국 형식
console.log(now.toLocaleString('ko-KR')); //미국 형식
