"use strict";

/* 
1. set variable

2. set loop

3. do something (read 1 letter, print out)

*/

let text = document.querySelector(".typewritten").innerHTML;
let letter;
let delay = 300;

initLoop();

function initLoop() {
  console.log("init loop!");
  document.querySelector(".typewritten").innerHTML = "";
  loop();
}

function loop() {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function write() {
      /* read 1 letter */
      letter = text.substring(i, i + 1);
      console.log(letter);
      /* print out 1 letter */

      document.querySelector(".typewritten").innerHTML += letter;
    }, i * delay);
  }
}
/* idk why i have to set i*delay for the speed control...
maybe the for Loop doesn't run one by one */
