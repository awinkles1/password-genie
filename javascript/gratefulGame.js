//id's in the html
let heading = document.getElementById("heading")
let game = document.getElementById("game")
let guess = document.getElementById("guess")
guess.display = "none"
let words = document.getElementById("words")
let score = document.getElementById("score")
let wins = document.getElementById("wins")
let losses = document.getElementById("losses")
let controls = document.getElementById("controls")
let play = document.getElementById("play")
let timer = document.getElementById("timer")
timer.innerHTML = 10
let reset = document.getElementById("reset")
let choices = []


class Title {
    constructor(name) {
        this.name = name
    }

}
let althea = new Title("Althea")
choices.push(althea.name)
let truckin = new Title("Truckin")
choices.push(truckin.name)
let darkStar = new Title("Dark Star")
choices.push(darkStar.name)
let ripple = new Title("Ripple")
choices.push(ripple.name)


    // guess.addEventListener("input", (event)=>{
    //     console.log(event.target) //Gets the element
    //     console.log(event.target.value) //Gets a property of the element
    //     event.target.style.color = "red"; //Modifies the css property of the element
    // })


const playGame = () => {
    let x = Math.floor(Math.random() * choices.length)
    let y = choices[x]
    let z = y.split('') 
    let blank = y.replace(/[a-z]/gi, '_')
    words.innerHTML = blank
    
    guess.addEventListener("input", (event) => {
       for (let i = 0; i < z.length; i++){
        if (event.target.value === z[i]){
            console.log("working")
        }
       }
    })
    



}
play.addEventListener("click", playGame)//starts game when play is hit 
play.addEventListener("click", (function () {//starts interval when play is hit
    var counter = 10
    setInterval(function () {
        counter--;
        if (counter >= 0) {

            timer.innerHTML = counter;
        }
        if (counter === 0) {
            timer.innerHTML = "Try again!";
            clearInterval(counter);
        }
    }, 1000);
}))

let a = {a_team: 12, b_team: 7, c_team: 0}
console.log(a.b_team)
function generateReportSummary(reportTotals, teamName) {
    // if teamName's report total is greater than 5
      // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
      if (reportTotals[teamName] > 5){
          return `${teamName} has surpassed goal with ${reportTotals[teamName]} reports`
      }
  }
  console.log(generateReportSummary(a,"b_team"))
let thing = [1,2,3,4,5]
  function filterOddElements(array) {
    let odds = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            odds.push(array[i])
        }
    }console.log(odds)
}
filterOddElements(thing)