/*const A = "A";
let F;

function doStuff(B) {
  console.log(B); // working, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // not working, D was declared in that if statement block
  console.log(H); // working, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // working, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // working, E was declared outside the while loop
console.log(G); // not working, declared inside the while loop and it's over

doStuff("B");
console.log(B); // not working, the B parameter expires after the function call
console.log(C); // not working, C was declared inside the function and the function is over
console.log(F); // working, F was declared in the global scope */

// # 2 Practice

let something = 'outside the function';
let thingToKeep;

function thing() {
  let something = 'outside the if statement';
  if (true) {
    let something = 'inside the if statement';
    console.log(something);
  }
  console.log(something);
  thingToKeep = 'defined now';
}

console.log(thingToKeep);
console.log(something);
thing();

console.log(something);
console.log(thingToKeep);
