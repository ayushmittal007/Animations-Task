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
