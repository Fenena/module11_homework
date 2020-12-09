function Sum1(num1){
 return function Sum2(num2){
  console.log(num1 + num2);
  }
}
const Sum = Sum1(3);
Sum(45);