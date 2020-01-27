// Towers of Hanoi is a simple logic game involving three stacks. The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block. You can play the game here to get an idea.

// Checklist
// 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code
// 20pts - Move Blocks - User can move "blocks" from column to column
// 20pts - Illegal Moves - Prevents larger blocks from stacking on smaller blocks
// 20pts - Notifies winner - When all the blocks are stacked into column 2 or 1 the user is told they won!
// 20pts - Minimum 3 Unit Tests - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done.

// Extended Practice Bonus!!

// Keeps count of moves as player plays games
// Logic is connected to a GUI
// Example
// Dissect the following game to get an insight on how to build Towers of Hanoi with a GUI


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let startStack;
let endStack;

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//TEST for Winner
const winner = [4, 3, 2, 1];
//   b: [4, 3, 2, 1],
//   c: [4, 3, 2, 1]
// };

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const isLegal = (startStack, endStack) => {
  // Get length of object array's and set last value for IF Condition
  let x;
  x = stacks[startStack].length;
  x = x - 1; // adjust to end posistion
  let startValue = stacks[startStack][x];

  let y;
  y = stacks[endStack].length;
  if (y != undefined) {
    y = y - 1;
  }

  let endValue = stacks[endStack][y];
  // return console.log(x.length + " " + y.length);
  // return console.log(xValue + " " + yValue);

//IF true call movePiece
if (startValue <  endValue || endValue == undefined){
    movePiece(startValue, startStack, endStack);
    // return console.log(startValue + " is the less then " + endValue)
  } else {
    return console.log(startValue + " is NOT less then " + endValue +" That move not allowed")
  }
}

const movePiece = (startValue, startStack, endStack) => {
  //Move pieces
  stacks[startStack].pop();  // pop last value
  stacks[endStack].push(startValue); //push last value from parameter

}
const checkForWin = (endStack) => {
  // STRINGIFY and compare end stack to WINNER array
  if (JSON.stringify(stacks[endStack]) == JSON.stringify(winner)){
    return console.log("Your a winner");
  } else {
    return console.log("Almost keep going");
  }
}

const towersOfHanoi = (startStack, endStack) => {
  //  islegal  ->  movePiece -> checkForWin 
  isLegal(startStack, endStack);
  checkForWin(endStack);
}

const getPrompt = () => {

  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

