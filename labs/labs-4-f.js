/*
  - guess the color (hint: it's "red")
  - disable a link
    1. create a variable for your anchor
    2. create a function to handle the event
    3. connect your function to your anchor variable
    4. ???
  - hijack a link
*/

// Variables
const correctAnser = "red";
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const clickButton = document.getElementById("DC")
// Function
function linkClick(event){
    console.log ('you clicked the link')
}
function handleClick(event) {
    console.log('you clicked a button!');
    // console.log(event);
    // console.log(event.value);
    console.log(event.target.value);
    // Earth.USA.Atlanta.Georgia.EastLake.ChrisHouse
}

// Set the click for each button
linkClick.addEventListener('click', linkclick);
redButton.addEventListener('click', handleClick);
greenButton.addEventListener('click', handleClick);
blueButton.addEventListener('click', handleClick);