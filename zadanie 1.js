var arr=[2, 2, 3, 5, 6, 0, 7, 0, "2", null, NaN, 8];
var x=0,u=0,n=0;
function Chislo(){
 for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && isNaN(arr[i]) == false) {
   if (arr[i] % 2) {
    console.log(arr[i]);
    x=x+1;
   }
   else {
    if (arr[i] == 0) {
     n=n+1;
    }
    else {
     u=u+1;
    }
   }
  }
 }
 console.log("Чет - " + u + " Нечет - " + x + " Нуль - " + n);
}

Chislo();