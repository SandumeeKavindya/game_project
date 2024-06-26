
let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);  


function valid() {
    
    let userInput = parseInt(document.getElementById("addnum").value);

    if (randomNumber == userInput) {
       document.getElementById("btn").innerHTML="You won!!!!!!!!!!!!!!!!!";
    } else if (randomNumber < userInput) {
        document.getElementById("btn").innerHTML="Number is greater than the random number, try again!";
    } else {
        document.getElementById("btn").innerHTML="Number is less than the random number, try again!";
    }
}
