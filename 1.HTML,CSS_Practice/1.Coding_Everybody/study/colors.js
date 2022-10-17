var Body = {
  setColor : function(color){
    // document.querySelector('body').style.color= color;
    $('body').css('color',color);//$는 jquery를 불러오는 함수
  },
  setBackground : function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

var Links = {
  setcolor : function(color){
  //     var alist = document.querySelectorAll('a');
  //     var i = 0;
  //     while(i<alist.length){
  //     alist[i].style.color = color;
  //     i++;
  //   }
  $('a').css('color',color);
  }

}

//document 객체 혹은 디렉토리(폴더) 라고 하며 querySelector('body')는 객체에 속해 있는 함수이며 객체에 속해있는 함수는 함수라고 부르지 않고 메소드(method) 라고 부른다.

function nightdayhandler(self){
  if(self.value === 'night'){
    Body.setBackground('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setcolor('powderblue');
  }
  else {
    Body.setBackground('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setcolor('blue');

  }
}
