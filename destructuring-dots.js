// array destructuring
const numbers =[54,92, 67, 90];
// const x =numbers[0];
// const y = numbers[1];
// const [x,y]=[54,92];
const[x,y] = numbers;
// console.log(x,y);

function boxify(num1){
    return[num1, num1 +5];
}
const [box1, box2] = boxify(8);
console.log(box1,box2);
// object destructuring
// const person ={id:2, money:34, name:'Kabul', age:25};
const {name, age} ={id:2, money:34, name:'Kabul', age:25};
console.log(name, age);

// create object shortcut
const one= 35;
const two = 25;
const obj ={x:x,y:y}
const obj2 ={one, two};
console.log(obj2);

// new array using three dots
const newNumbers = [...numbers, 89];
console.log(newNumbers);