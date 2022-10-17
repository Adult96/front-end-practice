//변수 이름이 key와 같으면 벨류 생략가능

const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function mankeObj(name, age) {
  return {
    name,
    age,
  };
}
