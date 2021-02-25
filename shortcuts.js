const money = 150;
const active = true;
let food;
if(money>100){
    food = 'biryani';
}
else{
    food = 'alur vorta';
}
// shortcut way of if else: Ternary
// variable declaration = condition? true value: false value
let food2 = money>100 ? 'biryani':'alur vorta';

const cssClass = active ? 'true':'inactive';
// we can call function inside a ternary
// active ? displayUser(): hideUser();
// to call only one function
// active && displayUser()
// active || displayUser()

const x = active && 5;
const y = active || 5;
// console.log(y);

// string to number
const number = +'45';
console.log(number);
// number to string
const numText = 45 + '';
console.log(numText);
// adding a default value for the function parameter
function add(num1, num2 = 5){
    return num1 + num2;
}