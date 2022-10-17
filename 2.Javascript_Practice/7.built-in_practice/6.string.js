//MDN String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); //문자의 인덱스 반환
console.log(text.lastIndexOf('l')); //뒤에서부터 문자의 인덱스 반환

console.log(text.includes('tx')); //특정한 문자가 들어있는지 확인
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('tx')); //문자가 시작하는지점을 확인
console.log(text.startsWith('h'));
console.log(text.startsWith('H'));
console.log(text.startsWith('He'));

console.log(text.endsWith('tx')); //끝나는 지점 확인
console.log(text.endsWith('i'));
console.log(text.endsWith('world'));
console.log(text.endsWith('World!'));

console.log(text.toUpperCase()); //문자를 전부 대문자로 변환
console.log(text.toLowerCase()); //문자를 전부 소문자로 변환

console.log(text.substring(0, 4)); //(Hel)원하는 문자열만 출력
console.log(text.slice(2)); //(llo World!)앞문자열 자르고 나머지 출력
console.log(text.slice(-2)); //(d!)앞문자열 자르고 뒷부분부터 나머지 출력
const space = '    space     ';
console.log(space.trim()); // 공백 제거

//알고리즘에서 정말많이 사용하는 스플릿

const longText = 'Get to the point';
console.log(longText.split(' ')); //[ 'Get', 'to', 'the', 'point' ] 원하는 부분으로 끊어서 배열로 출력 원하는 문자열도 끊어서 출력가능
console.log(longText.split(' ', 2)); //[ 'Get', 'to' ] 원하는 부분으로 끊어서 배열로 출력

/*
날짜 같은 문자열을 이용할때 -를 뺴야 하는 경우가 많다

-와 같은 특정문자를 제거할 때는 replace를 사용하면 된다.

String.replace('-', '')

근데 위에처럼 하면 처음 -기호만 삭제되고 나머지는 삭제되지 않는다.

String.replace(/\-/g, '')

-기호가 특수문자 이기때문에 \(역슬래시)를 붙여줘야 한다.
*/

//정규 표현식 블로그  https://curryyou.tistory.com/234
//특정문자 제거
str.replace(/\-/g, '');
// 앞의 공백 제거
str.replace(/^\s+/, '');
// 뒤의 공백 제거
str.replace(/\s+$/, '');
// 앞뒤 공백 제거
str.replace(/^\s+|\s+$/g, '');
// 문자열 내의 공백 제거
str.replace(/\s/g, '');
// 개행 제거
str.replace(/\n/g, '');
// 엔터 제거
str.replace(/\r/g, '');
// 0 제거
str.replace(/[^(1-9)]/gi, '');
// 특수문자 제거
var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
str.replace(reg, '');

const s = 'baabaac';
s.replace(/(.)\1/g, ''); //bbc

//문자열 치환
replace('문자열을', '원하는 문자열로');

//모든 문자열 치환
replace(/문자열을/g, '원하는 문자열로');
