

// function sayHello(greeting, name = 'World') {
//   return `${greeting} ${name}`;
// }
//
// console.log('sayHello message:', sayHello('Hello', 'Robert'));

// var add = function(firstNumber, secondNumber){
//   return firstNumber + secondNumber;
// }
//
// console.log('1 + 3 with add functions: ', add(1,3));

// var add = new Function('num1', 'num2', 'return num1 + num2');
// console.log(add(2, 6));

// var numbers = [1, 2, 3, 4, 5];
//
// function add () {
//   return numbers.count(numbers)
// }
// console.log(add())

var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}

console.log('multiply 2 by 5 =', multiply(2,5));
