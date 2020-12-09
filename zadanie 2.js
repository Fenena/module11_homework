var n = prompt('Введите значение: ');

Prostoy(n);

function Prostoy(a){
 if(a == 0){
   console.log('0 - не простое число');
  }
 else{
  if(a == 1){
   console.log('1 - не простое число');
    }
  else{
   if(a > 1000){
    console.log('Ошибка. Значение больше 1000.');
      } 
     else{
    for(var i = 2; i < a; i++){
      if(a % i === 0){
      console.log(a + ' - не простое число');
      return false;
          } 
      } 
    console.log(a + ' - простое число');
    return a > 1;
     } 
    }
  } 
}