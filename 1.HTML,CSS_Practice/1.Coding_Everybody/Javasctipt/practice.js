//--------------------태그 불러오기
const title = document.getElementById("title");//
console.dir(title);//dir 는 해당 태그의 오브젝트가 다나온다
console.log(title);

const hellos = document.getElementsByClassName("hellos"); //클래스가 여러개면 배열로 나온다

console.log(hellos[0]);

const otherHello = document.querySelector(".other h1");//querySelector는 css스타일로 가져옴 class,id둘다 가져올수 있으며 하위 태크를 가져올수있음 클래스는. 태그는#으로 가져옴

console.log(otherHello);

const name1 = document.getElementsByTagName("h1");//해당 태그를 배열로 가져옴

console.log(name1);

const title1 = document.querySelector("#title h1");//querySelector는 css스타일로 가져옴 class,id둘다 가져올수 있으며 하위 태크를 가져올수있음 클래스는. 태그는#으로 가져옴

console.log(title1);

const title2 = document.querySelectorAll(".title1 h1");//querySelector는 css스타일로 가져옴 class,id둘다 가져올수 있으며 하위 태크를 가져올수있음 클래스는. 태그는#으로 가져옴
console.log(title2[1]);

// title2[0].style.color = "powderBlue"
// title2[1].style.color = "Red"
// title2[2].style.color = "Pink"


//--------------------event 사용하기
function handleTitleClick(){
    title2[0].classList.toggle("clicked");  
}

const handleTitleEnter = function(){
    title2[2].innerText = "Mouse is here"
    
}

function handleTitleMouseLeave(){
    title2[2].innerText = "Mouse is gone"
}

function handleWindowResize(){
    document.body.className = "bodyBackgroundColor";//bodyBackgroundColor CSS의 클래스를 받아오기
}

function handleTitleCopy(){
    alert("Don't copy");
}

function handleWindowOffline(){
    alert("Sever is Offline");
}

function handleWindowOnline(){
    alert("Sever is Online");
}

title2[0].addEventListener("click", handleTitleClick);
title2[2].addEventListener("mouseenter", handleTitleEnter);
title2[2].addEventListener("mouseleave", handleTitleMouseLeave);

window.addEventListener("resize", handleWindowResize);//window 객체를 쓸땐 div,h1등의 하위 태그는 메소드로 못쓰고 titile,head,body같은 상위 태그를 만쓸수있다.
window.addEventListener("copy", handleTitleCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

console.log(window);

/*
//-------------------------연습 시작------------------------------
const age =parseInt(prompt("How old are you"));//prompt는 사용하지 않음 css로 디자인 변경 불가 오래된 기능임
//console.log(age,parseInt(age));//typeof는 변수의 데이터 타입을 알수있음 parseint는 문자를 숫자로 변환
if(isNaN(age) || age<0){//isNaN은 NaN인지 아닌지 판단후 불리언으로 리턴
    console.log("please write a real positive number");    
}
else if(age<18){
    console.log("your too young");    
}
else if(18<=age && age<=50){
    console.log("you can drink");    
}
else if(51<=age && age <=81){
    console.log("you should exercise");  
}
else{
    console.log("you can't drink");  
}
//--데이터 타입,변수 타입--
var c = ""; // var는 오래된 언어 변수값을 바꿀수가 있음 기본적으로 사용하지 않음

const a = 5; //const는 변수값을 바꿀수 없음 기본적으로 사용하는 변수
const b = 2;
let myName = "sungin"; //let은 변수값을 바꿀수가 있음 

const true1 = true; //true = 1
const false1 = false;//false = 0
const null1 = null; // null = 정의는 되어있지만 nothing
const undifined1 = undefined//아무것도 정의 되지않은 데이터타입 메모리 않에 공간은 존재하지만 값이없음


console.log(a + b) ;
console.log(a - b) ;
console.log(a * b) ;
console.log(a / b) ;
console.log("hello"+myName);

myName = "Park sung in";
console.log("hello"+myName);

//--배열--

const daysofweek = ["mon","tue","wed","thu","fri","sat"];
console.log(daysofweek);
console.log(daysofweek[0]);
console.log(daysofweek[1]);

daysofweek[0] = "park sung in"; 
                                
console.log(daysofweek);

daysofweek.push("sun");//push("sun") 배열에 요소 추가
console.log(daysofweek);

//--object--
const player = {
    name: "parksungin",
    age: 26,
    fat: false,
    "no way": "no way" // property에 띄어쓰기가 있을땐 문자열로 넣는다
}
console.log(player);
console.log(player["name"]);
console.log(player.name,player["no way"]);


player.hansome = true;
console.log(player);
player["very good"] = true;
console.log(player);
player.age = player.age-10;
console.log(player);

function sayHello(value){
    console.log(value);
} 
sayHello("hello");

const my ={
    name:"sungin",
    sayHello:function(){
        console.log("hello");
    }
}
console.log(my["sayHello"]);

//--계산기--

const calculator ={
    plus:function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    div:function(a,b){
        console.log(a/b);
    },
    multi:function(a,b){
        console.log(a*b);
    },
    power:function(a,b){
        console.log(a**b);
    },
    na:function(a,b){
        console.log(a%b);
    },
}
calculator.div(2,3);
calculator.minus(2,3);
calculator.multi(2,3);
calculator.power(2,3);
calculator.na(2,3);
document.write();

//--return--
const age = 96;
function calculateKrAge(age0fForeigner){
    return age0fForeigner+2;
}
console.log(calculateKrAge(age));

const calculator1 ={
    plus:function(a,b){
    return(a+b);
    },
    minus:function(a,b){
        return(a-b);
    },
    div:function(a,b){
        return(a/b);
    },
    multi:function(a,b){
        return(a*b);
    },
    power:function(a,b){
        return(a**b);
    },
    na:function(a,b){
        return(a%b);
    },
}

const plus = calculator1.plus(2,3);     //위에서 return을 사키기때문에 console.log를 쓰지 않아도 된다
const minus = calculator1.minus(plus,3);
const div = calculator1.div(minus,3);
const multi = calculator1.multi(div,3);
const power = calculator1.power(multi,3);
const na = calculator1.na(power,3);
/*-------------------------연습 종료------------------------------
*/


