"use strict";

const written = document.querySelector(".typewritten").innerHTML;
let i = 0;
let letter;

initWrite();

function initWrite() {
  document.querySelector(".typewritten").innerHTML = "";
  write();
}

function write() {
  /* read 1 letter */
  letter = written.substring(i, i + 1);

  /* print out 1 letter */
  console.log(letter);
  document.querySelector(".typewritten").innerHTML += letter;

  /* mark each round of iteration */
  i++;

  /* check the condition and loop */
  if (i < written.length) {
    setTimeout(write, 500);
  }
}
