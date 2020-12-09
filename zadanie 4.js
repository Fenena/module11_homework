var a = prompt('Первое значение:');
var b = prompt('Второе значение:');

const inter = setInterval(function(a, b){
 do{
  console.log(+a);
  a++;
  } 
 while(a <= b);
 clearInterval(inter);
}, 1000, a, b);