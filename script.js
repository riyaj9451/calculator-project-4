let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event);
    let key = event.target.innerText;
    if (key == "RESET") {
      display.innerText = "";
    } else if (key == "DEL") {
      if (display.innerText == "Infinity") {
        display.innerText = "";
      } else {
        display.innerText = display.innerText.slice(0, -1);
      }
    } else if (key == "=") {
      if (display.innerText) {
        display.innerText = eval(display.innerText);
      }
    } 
     else {
      display.innerText += key;
    }
  });
});