// 접근자 프로퍼티(Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //생성장에 한번 만들어지고 나서는 업데이트가 되지 않음
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  //외부에서 업데이트를 계속 하려면 함수를 사용해야함
  //get을 쓰면 함수를 호출하지않고 속성을 호출하듯이 쓸수있음 단! 생성자의 속성과 관련된 작동을 해야 사용가능
  //접근자 프로퍼티 get
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  //외부에서 fullName에 할당하면 fullName함수가 호출됨
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('박', '성인');
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '박성인';
