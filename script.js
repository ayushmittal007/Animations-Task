// let arr = ["Hello Ayush" , "Hello Aman", "Hello Aryan" , "Hello Aviral","Hello Jatin"]

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let idx = getRandomInt(0,5)

const text = "WELCOME";
const outputElement = document.getElementById("output");

function displayLetters(text) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      outputElement.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 200); 
}

displayLetters(text);

let btn_click = document.getElementById("btn").addEventListener('click', function() {
    window.open("game.html","_blank");
});
