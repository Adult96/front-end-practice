//문자열 타입
let string = '안녕하세요';
string = `안녕ㅎ`; //백터 사용
console.log(string);

//특수문자 출력하는법
string = '"안녕하세요"';
console.log(string);

string = '안녕\n엘리야!\t\tㅎㅎ\\gg\u09ac';
console.log(string);

//템플릿 리터럴(Template Literal)
let id = '성인';
let greetings = "'안녕'," + id + '\n즐거운 하루 보내요!';
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내요!`;
console.log(greetings);
