let base = parseInt(
    prompt("What number do you want to a multiplication table of?")
  );

  if (!base) {
      alert("you have not selected a number, we will make it 1")
    base = 1;
  }

  let range = parseInt(prompt("What number should I stop at?"));
  if (!range) {
      alert("you have not selected a number, we will make it 10")
    range = 10;
  }

let i = 1;

do {
    console.log(`Do while loop ex: ${base} x ${i} = ${base * i}`)
    i++;
} while (i <= range);

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500