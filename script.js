/*-------app's state (variables)---------*/

var lives; //Count of lives remaining

var y = Math.floor(Math.random() * 10 + 1); //generate random value
console.log("y", y);

var counter = 1; //counts of number of correct guesses
console.log("counter", counter);

/*----- cached element references -----*/
let span1 = document.getElementById("span1")

/*----- event listeners -----*/
document.getElementById("submitted").addEventListener("click", function(event){
    console.log("hi")
    game();
})

function game() {
  console.log("gamefunction")
  var x = document.getElementById("guessField").value;
  console.log("x", x)
    if (x == y)
   {
      
    alert("CONGRATULATIONS!!! You guessed it right in" + counter + "GUESS");
    span1.innerText = counter;
    }
     else if (x > y)
   {
     counter++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER NEXT TIME!!!");
    }
    else
    {
      counter++;
     alert("OOPS SORRY!! TRY A BIGGER NUMBER NEXT TIME!!!");
    }
     }

   
