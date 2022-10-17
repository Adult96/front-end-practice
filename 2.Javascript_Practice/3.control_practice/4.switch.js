//MDN switch: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch

//조건문 Conditional Statement
//switch
//if else if else ...else
//정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 7; //0:월요일, 1:화요일....6:일요일
let dayName;
if (day === 1) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;

  default: //모든조건이 해당하지 않을때 if문으로 따지면 else
    dayName = '해당 요일 없음';
    break;
}
console.log(dayName);

let condition = 'okay'; //okay,good ->좋음, bad ->나쁨
let text;

switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
  default:
    break;
}
console.log(text);
