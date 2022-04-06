/*-------app's state (variables)---------*/

var lives; //Count of lives remaining

var y = Math.floor(Math.random() * 10 + 1); //generate random value
console.log("y", y);

var counter = 1; //counts of number of correct guesses
console.log("counter", counter);

const highScoreLocaleStorageKey = "highscorekey";
window.localStorage.setItem(highScoreLocaleStorageKey, 10);

/*----- cached element references -----*/
let span1 = document.getElementById("span1");
let submitted = document.getElementById("submitted");
let btn_id = document.getElementById("keypad");
let guessFieldId = document.getElementById("guessField");
let resultmsgId = document.getElementById("resultmsg");
let resetId = document.getElementById("reset");
let highscoreId = document.getElementById("highscore");

/*----- event listeners -----*/
btn_id.addEventListener("click", keying); //callback means you are letting the system call the function upon click

submitted.addEventListener("click", function (event) {
  //upon TryMe click, function gets evoked.
  console.log(event.id);
  game(); //calling the function.
});

resetId.addEventListener("click", function (event) {
  myreset();
});

/*----------Function--------*/
function game() {
  console.log("gamefunction");
  var x = document.getElementById("guessField").value;
  console.log("x", x);
  if (x == y) {
    resultmsgId.innerText =
      "CONGRATULATIONS!!! You guessed it right in " + counter + " guesses";
    span1.innerText = counter; //How do I make it besides the #of guesses?
    highscore(); //calling the function highscore to calculate the lowest #of guesses till date!
    highscoreId.innerText +=
      `  Highest Score: ` +
      window.localStorage.getItem(highScoreLocaleStorageKey);
  } else if (x > y) {
    counter++;
    resultmsgId.innerText = "OOPS SORRY!! TRY A SMALLER NUMBER NEXT TIME!!!";
  } else {
    counter++;
    resultmsgId.innerText = "OOPS SORRY!! TRY A BIGGER NUMBER NEXT TIME!!!";
  }
}

function keying(e) {
  console.log(e.target);
  guessFieldId.value = e.target.innerText;
 }

function highscore() {
  const highScore = window.localStorage.getItem(highScoreLocaleStorageKey);
  if (counter < highScore) {
    window.localStorage.setItem(highScoreLocaleStorageKey, counter);
    console.log("\n", " Highscore: ", +highScore);
  }
  return highScore;
}

function myreset() {
  console.log("entering myreset function");
  guessFieldId.value = "";
  counter = 0;
  span1.innerText = "";
  resultmsgId.innerText = "";
  console.log(counter);
}
