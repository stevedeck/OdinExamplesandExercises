const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
    return 'that s#!thole!'
 }
}

// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function] -- can't use dot notation ."obnoxious property" because it is a string with a space

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

console.log(playerOneName)
console.log(playerTwoName)

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function printName(player) {
    console.log(player.name)
}

function gameOver(winningPlayer){
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}

//OBJECT CONSTRUCTORS

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'


