//래퍼 객체 (Wrapper Object)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123;
//number 원시타입을 감사고있는 Number 객체로 감싸짐(.을 찍으면 원시타입이 객체(object로 감싸짐))
console.log(number.toString());
console.log(number); //number원시타입

const text = 'text'; //string 원시타입
text.length; //string 객체 타입
