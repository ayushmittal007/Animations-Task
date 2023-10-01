const text = "Hello, World!";
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
  }, 240); 
}

displayLetters(text);
