// const person = {
//     name: "Shaz", 
//     age: 20, 
//     location: {
//         city: "Brampton", 
//         temp: 38
//     }
// }

// const { name: firstName = "Anonymous", age } = person; 

// console.log(`${firstName} is ${age}.`); 

// const {city, temp: temperature} = person.location; 
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy', 
//     author: 'Ryan Holiday', 
//     publisher: {
//         //name: 'Penguin'
//     }
// }

// const { name: publisherName = "Self-Published" } = book.publisher; 
// console.log(publisherName); 

// const address = ['36 Speedwell St', 'Brampton', 'Ontario', 'L6X5H2'];

// const [, city, province = "Unknown"] = address; 
// console.log(`You are in ${province}`) 

const item = ['Iced Capp', '$2.00', '$3.00', '$4.00']
const [drink, , mPrice] = item; 
console.log(`A medium ${drink} costs ${mPrice}`); 