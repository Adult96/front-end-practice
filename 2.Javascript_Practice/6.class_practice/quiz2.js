//정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
//직월들의 정보: 이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
//정직원은 시간당 10000월
//파트타임 직원은 시간당 8000원

class FullTimeEmployee {
  #fullTime = 10000;
  salary;
  constructor(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  StaffInformation() {
    console.log(
      `Name:${this.name} Department:${this.department} Salary;${
        this.salary * this.#fullTime
      }원`
    );
  }
}

class PartTimleEmployee extends FullTimeEmployee {
  #partTime = 8000;

  StaffInformation() {
    console.log(
      `Name:${this.name} Department:${this.department} Salary:${
        this.salary * this.#partTime
      }원`
    );
  }
}
const ParkSungIn = new FullTimeEmployee('성인', 's/w', 209);
const hong = new PartTimleEmployee('홍길돌', 's/w', 300);
ParkSungIn.StaffInformation();
hong.StaffInformation();
