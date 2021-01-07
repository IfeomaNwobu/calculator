//add an event listener to click buttons
//let numberButtons = document.getElementsByClassName('number');

// document.getElementsById('one').addEventListener('click', function (event) {
//     console.log(event)
// });

//console.log(document.getElementById('one').a)



//create a function that collects the initial set of numbers
// const firstNums = (x , y) => {

// }

const calculator = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

buttons.addEventListener('click', e => {
    if(e.target.matches('button')){
        console.log('clicked');
   }
});