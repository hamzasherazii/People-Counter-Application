
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML file to reflect the new count 

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment(){
    // console.log("The button was clicked!");
    count = count + 1;
    countEl.innerText = count;
};


function saveCount(){
    console.log(count);
};