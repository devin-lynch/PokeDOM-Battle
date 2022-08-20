console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')

let playerHealth = 100
let cpuHealth = 100
let turn = 'Mankey'

// Need to alternate turns and ensure Dragonite does not immediately attack after mankey attacks. 
// Can make an 'a' button to advance text.
// Create conditional if (turn === 'Dragonite') {
//     dragoniteAttack()} 





// Stretch goal: make an ability that enhances the next turns ability?

// Attack buttons
attackOne.addEventListener('click', lowKick)
attackTwo.addEventListener('click', scratch)
attackThree.addEventListener('click', closeCombat)
attackFour.addEventListener('click', skullBash)



// Mankey moves
function lowKick() {
    cpuHealth -= 20
    console.log(`Mankey used Low Kick!`)
    console.log(`Dragonite has ${cpuHealth}hp!`)
    victory() // checks if cpu HP is 0
    turn = 'Dragonite'
    console.log(`It's ${turn}'s turn to attack!`)
    if (turn === 'Dragonite' && playerHealth > 0) {
        dragoniteAttack()
    }
}

function scratch() {
    cpuHealth -= 25
    console.log(`Mankey used Scratch!`)
    console.log(`Dragonite has ${cpuHealth}hp!`)
    victory() // checks if cpu HP is 0
    turn = 'Dragonite'
    console.log(`It's ${turn}'s turn to attack!`)
    if (turn === 'Dragonite' && playerHealth > 0) {
        dragoniteAttack()
    }
}

function closeCombat() {
    cpuHealth -= 30
    console.log(`Mankey used Close Combat!`)
    console.log(`Dragonite has ${cpuHealth}hp!`)
    victory() // checks if cpu HP is 0
    turn = 'Dragonite'
    console.log(`It's ${turn}'s turn to attack!`)
    if (turn === 'Dragonite' && playerHealth > 0) {
        dragoniteAttack()
    }
}

function skullBash() {
    cpuHealth -= 20
    console.log(`Mankey used Skull Bash!`)
    console.log(`Dragonite has ${cpuHealth}hp!`)
    victory() // checks if cpu HP is 0
    turn = 'Dragonite'
    console.log(`It's ${turn}'s turn to attack!`)
    if (turn === 'Dragonite' && playerHealth > 0) {
        dragoniteAttack()
    }
}



// Dragonite moves

const cpuAttacks = [hyperBeam, dragonRush, hurricane, thunderPunch]

function dragoniteAttack() {
    const random = Math.floor(Math.random() * 4);
    cpuAttacks[random]()
    console.log(`Mankey has ${playerHealth}hp!`)
    console.log(`It's ${turn}'s turn to attack!`)
    // console.log(cpuAttacks[random])
} 



function hyperBeam() {
    playerHealth -= 25
    console.log(`The wild Dragonite used Hyper Beam!`)
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function dragonRush() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Dragon Rush!`)
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function hurricane() {
    playerHealth -= 35
    console.log(`The wild Dragonite used Hurricane!`)
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

function thunderPunch() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Thunder Punch!`)
    defeat() // checks if user HP is 0
    turn = 'Mankey'
}

// if (turn === 'Dragonite') {
//     dragoniteAttack()
// }




//message if player wins
function victory() {
    // Ensure you can't continue attacking after victory
    if (cpuHealth <= 0) { 
        console.log(`The wild Dragonite fainted!`)
    }
}

//message if cpu wins
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        console.log(`Your Mankey fainted! You were overwhelmed by your defeat!`)
    }
}

