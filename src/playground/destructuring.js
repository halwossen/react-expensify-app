// 
// Object Destructuring
// 

// const person = {
//     name: 'Hailu',
//     age: 34,
//     location: {
//         city: 'Addisaba',
//         temp: 20
//     }
// }

// const { name: firstname = 'Anonymous', age } = person;

// console.log(`${firstname} is ${age}.`);

// const { city, temp } = person.location;

// if(city && temp) {
//     console.log(`${city} is ${temp} deg.Cent right now.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguine'
//     }
// }

// const { name: publishername = 'Self-published' } = book.publisher

// console.log(publishername);


// 
// Array Destructuring
// 

const item = ['Coffee(hot)', '$2.0', '$2.5', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)