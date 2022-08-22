// TODO
// Make the pokemon that takes damage shake upon receiving damage
// Make the attacking pokemon do a dash motion
// Try to add 'critical' attack chance
// Change hp background-color based on current hp
// Add play instructions to select button
// Style buttons to match gameboy buttons (A/B round)

console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')
const text = document.querySelector('#text')
const cpuHealthBar = document.querySelector('#cpu-health')
const playerHealthBar = document.querySelector('#user-health')
const cpuHealthZone = document.querySelector('.cpu-health')
const playerHealthZone = document.querySelector('.user-health')
const aButton = document.querySelector('#a')
const bButton = document.querySelector('#b')
const startButton = document.querySelector('#start')
const selectButton = document.querySelector('#select')
const userPokemon = document.querySelector('#user-pokemon')
const cpuPokemon = document.querySelector('#cpu-pokemon')
let playerHealth = 100
let cpuHealth = 100
let turn //= 'Mankey'

function typeWriter() {
    let i = 0
    let speed = 50
    if (i < text.innerText.length) {
        text.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

// a button to clear text. can then add conditional "if turn = dragonite and text = ""... then allow dragonite to attack"
// need to add prompt to tell player to press a button so that dragonite can attack. 
aButton.addEventListener('click', function() {
    if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
        dragoniteAttack()
    // } else if (turn === gameOver) {

     }
})

// GAME RESET BUTTON
startButton.addEventListener('click', function() {
    text.style.fontSize = '26px'
    userPokemon.style.visibility = 'visible'
    cpuPokemon.style.visibility = 'visible'
    playerHealth = 100
    cpuHealth = 100
    cpuHealthBar.innerText = cpuHealth
    playerHealthBar.innerText = playerHealth
    turn = 'Mankey'
    text.innerText = `You're up first, Mankey! Please select an attack!`
})

selectButton.addEventListener('click', function () {
    text.style.fontSize = '22px'
    text.innerText = `The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!`
})


function updatePlayerHealth() {
    if (playerHealth < 0) { // makes sure hp does not show a negative amount. 
        playerHealth = 0
    }
    playerHealthBar.innerText = playerHealth
}

function updateCpuHealth() {
    if (cpuHealth < 0) { // makes sure hp does not show a negative amount. 
        cpuHealth = 0
    }
    cpuHealthBar.innerText = cpuHealth
}
// Need to alternate turns and ensure Dragonite does not immediately attack after mankey attacks. 
// Can make an 'a' button to advance text.


// Stretch goal: make an ability that enhances the next turns ability?

// Attack buttons
attackOne.addEventListener('click', lowKick)
attackTwo.addEventListener('click', scratch)
attackThree.addEventListener('click', closeCombat)
attackFour.addEventListener('click', skullBash)

// Need to stop console logging turn if a pokemon has fainted

// Mankey moves
function lowKick() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 20
        console.log(`Mankey used Low Kick!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `Mankey used Low Kick! Dragonite has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function scratch() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 25
        console.log(`Mankey used Scratch!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `Mankey used Scratch! Dragonite has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function closeCombat() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 30
        console.log(`Mankey used Close Combat!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `Mankey used Close Combat! Dragonite has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function skullBash() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 20
        console.log(`Mankey used Skull Bash!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `Mankey used Skull Bash! Dragonite has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}



// Dragonite moves

const cpuAttacks = [hyperBeam, dragonRush, hurricane, thunderPunch]

function dragoniteAttack() {
    if (playerHealth > 0 && cpuHealth > 0) {
        const random = Math.floor(Math.random() * 4);
        cpuAttacks[random]()
        console.log(`Mankey has ${playerHealth}hp!`)
        updatePlayerHealth()
        if (playerHealth > 0) {
            text.innerText += ` Mankey has ${playerHealth}hp!`
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Please select an attack!`
        }
        // console.log(cpuAttacks[random])
    }
} 



function hyperBeam() {
    playerHealth -= 25
    console.log(`The wild Dragonite used Hyper Beam!`)
    text.innerText = `The wild Dragonite used Hyper Beam!`
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function dragonRush() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Dragon Rush!`)
    text.innerText = `The wild Dragonite used Dragon Rush!`
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function hurricane() {
    playerHealth -= 35
    console.log(`The wild Dragonite used Hurricane!`)
    text.innerText = `The wild Dragonite used Hurricane!`
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function thunderPunch() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Thunder Punch!`)
    text.innerText = `The wild Dragonite used Thunder Punch!`
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}


//message if player wins
function victory() {
    // Ensure you can't continue attacking after victory
    if (cpuHealth <= 0) { 
        // turn = 'gameOver'
        // typeWriter()
        cpuPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` The wild Dragonite fainted!  Please press 'START' to battle again!`
        console.log(`The wild Dragonite fainted!`)
    }
}

//message if cpu wins
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        // turn = 'gameOver'
        // typeWriter()
        userPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` Your Mankey fainted! You were overwhelmed by your defeat!`
        console.log(`Your Mankey fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`)
    }
}

