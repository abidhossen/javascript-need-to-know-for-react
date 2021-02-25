// api fetch
// fetch(url)
// .then(res=>res.json())
// .then(data=> console.log(data));

// JSON
const person ={
    name : 'Abdul',
    age: 34,
}
// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed);
// controlling local storage
// localStorage.setItem('userId',1245);
const userId = localStorage.getItem('userId');
// console.log(userId);
localStorage.setItem('person', data);
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
// console.log(parsedPerson.age);
const values = Object.values(parsedPerson);
console.log(values);