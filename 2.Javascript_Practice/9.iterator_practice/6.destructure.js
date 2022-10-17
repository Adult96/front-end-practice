//MDN Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//구조 분해 할당 Destructuring Assignment
const fruits = ['🍌', '🥝', '🍇', '🥝'];
let [first, sceond, ...others] = fruits;
console.log(first);
console.log(sceond);
console.log(others);

//선언 되나 확인 한거
first = 'hi';
console.log(first);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'sungin', age: 27, home: { address: 'home ' } };
function display(person) {
  console.log('name:', person.name);
  console.log('age:', person.age);
  console.log('home:', person.home);
}
display(ellie);

function display2({ name, age, home }) {
  console.log('name:', name);
  console.log('age:', age);
  console.log('home:', home);
}

display2(ellie);

const { name, age, home: tower, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(tower);
console.log(pet);

// Quiz

const prop = {
  name: 'Button',

  styles: {
    size: 20,

    color: 'black',
  },
};

function changeColor({ name, styles, styles: { size, color } }) {
  console.log(name);
  console.log(styles);
  console.log(size);
  console.log(color);
}

changeColor(prop);
