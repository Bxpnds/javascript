// Positive Numbers

// var bells = [33, -4, 8, 76, -9, 56, -99, 83, 0, -43, 89];

// let newBells = bells.filter(bells =>{
//         return bells > 0;
// })
// console.log(newBells)



// End of Positive numbers

// ##even Numbers##
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// let newBalls

// var numbers = [33, -4, 8, 76, -9, 56, -99, 83, 0, -43, 89];

// let evenNumbers = numbers.filter(numbers =>{
//         return numbers % 2 == 0
// })
// console.log(evenNumbers)

// ## End of Even Numbers##

// Squared the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// var numbers = [33, -4, 8, 76, -9, 56, -99, 83, 0, -43, 89]


// let squareNumbers =  numbers.map(numbers =>{
//         return numbers * numbers
// })
// console.log(squareNumbers)

// ##End Of Squared Numbers##

//  ##Cities1##
// Write a function which takes an array of city objects like such:

// var cities = [
//         { name: 'Los Angeles', temperature: 60.0},
//         { name: 'Atlanta', temperature: 52.0 },
//         { name: 'Detroit', temperature: 48.0 },
//         { name: 'New York', temperature: 80.0 } ];
//  // as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

//  let coolCities = cities.filter(cities =>{
//          return cities.temperature < 70;
//  } )
// console.log(coolCities)

// ## End of Cities1##


// ##Cities2##
// / Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

// var cities = [
//                 { name: 'Los Angeles', temperature: 60.0},
//                 { name: 'Atlanta', temperature: 52.0 },
//                 { name: 'Detroit', temperature: 48.0 },
//                 { name: 'New York', temperature: 80.0 } ];

// let cityList = cities.map(cities =>{
//         return cities.name;
// }) 
// console.log(cityList)

//  ##Cities2 End##

// ## Good Job##
// rint out 'Good Job, {{name}}!' for each person's name, one on a line.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// let names = people.forEach(people =>{
//         console.log ('Good Job ' + people)
// })

// ## Good Job End##

// ## Sort an Array##
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]

// people.sort();
// console.log(people)
// ##sort an Array end##

// ##Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ]

// const nameLength = people.sort((a,b) => a.length - b.length);

// console.log(nameLength); 
// ## Sort an array 2 End##

// ##Sort an array, 3##
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9.
// var arr = [
//         [1, 3, 4],
//         [2, 4, 6, 8],
//         [3, 6] ];

//         arr.sort((a, b) => return a - b);
//         const reducer = (accumulator, currentValue) => accumulator + currentValue;

//         console.log(arr[0].reduce(reducer));

// ##Sort an array end##





// ##3 Times##
// Use the call3Times function to print "Hello, world!" 3 times.
// let call3Times = " Hello World ".repeat(3)
// console.log(call3Times)

// ##3 Times End##
