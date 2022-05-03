/*
  Excercise # 1

  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

let character = 'f';
let timesToRepeat = 5;
let myString = '';

for (let i = 0; i < timesToRepeat; i++) {
  myString = myString + character;
}

console.log(myString);




