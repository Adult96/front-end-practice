// const dog1 = { name: 'λ­μΉ', emoji: 'π' };
// const dog2 = { name: 'μ½μ½', emoji: 'π' };

//μΈμ€ν΄μ€λ? λμΌνκ² μ°μ΄λ΄κΈ° μν΄ λ§λ  μμ±μν¨μ μμ μμ±λ κ°μ²΄

//μμ±μ ν¨μ
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //μΈμ€ν΄μ€ λ λ²¨μ ν¨μ
  // this.printName = () => {
  //   console.log(`${this.name}${this.emoji}`);
  // };
}
// κ³΅ν΅μ μΌλ‘ κ°μ§κ³ μλ νλ‘ν νμ λ λ²¨μ ν¨μ
Dog.prototype.printName = function () {
  console.log(`${this.name}${this.emoji}`);
};

const dog1 = new Dog('λ­μΉ', 'π');
const dog2 = new Dog('μ½μ½', 'π');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//μ€λ²λΌμ΄λ©
//μΈμ€ν΄μ€ λ λ²¨μμ(μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ νλ©΄(μ€λ²λΌμ΄λ© νλ©΄)
//νλ‘ν νμ λ λ²¨μ(λΆλͺ¨)ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€(μλμ λ¨)
dog1.printName = function () {
  console.log('μλ');
};

dog1.printName();

//μ μ λ λ²¨ μΈμ€ν΄μ€ λ λ²¨μ κ³΅ν΅λ μμ±μ΄ μμΌλ©΄ μ¬μ©
Dog.hello = () => {
  console.log('hello');
};

Dog.hello();
Dog.MAX_AGE = 5;
console.log(Dog);
