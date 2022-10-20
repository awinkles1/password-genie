//vars for all inputs
let upperCase = document.getElementById("upperCase")
let lowerCase = document.getElementById("lowerCase")
let numbers = document.getElementById("numbers")
let characters = document.getElementById("characters")
let pwLength = document.getElementById("pwLength")
let pwOutput = document.getElementById("pwOutput")
let submit = document.getElementById("submit")

//info to be pulled into password
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperArr = lowerArr.map((a) => a.toUpperCase())
let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let charactersArr = ["!", "@", "#", "$", "%", "&"]

const pwMaker = () => {
    let password = []
    let all = []

    if (upperCase.checked) {
        all = all.concat(upperArr)
    }
    if (lowerCase.checked) {
        all = all.concat(lowerArr)
    }
    if (numbers.checked) {
        all = all.concat(numbersArr)
    }
    if (characters.checked) {
        all = all.concat(charactersArr)
    }
    if (upperCase.checked === false && lowerCase.checked === false && numbers.checked === false && characters.checked === false){
        return pwOutput.innerHTML = "Please choose at least one set of characters"
    }
    if (pwLength.value < 8 || pwLength.value > 128){
        
        return pwOutput.innerHTML ="Please choose a number between 8 and 128"
    }
    else for (let i = 0; i < pwLength.value; i++) {
        let x = Math.floor(Math.random() * all.length)
        let y = all[x]
        password.push(y)
    }pwOutput.innerHTML = password.toString().replace(/,/g,'')
}

submit.addEventListener("click", pwMaker)