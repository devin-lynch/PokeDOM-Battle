console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')

let playerHealth = 100
let cpuHealth = 100

// Need to determine if using 'real' pokemon or something else for characters (like dog vs mailman)
// Can then decide on attacks

// MVP cpu has one attack -- can add more after battle is working. Player will have 2-4 to choose from. 

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
    console.log(cpuHealth)
    victory() // checks if cpu HP is 0
}

function scratch() {
    cpuHealth -= 25
    console.log(`Mankey used Scratch!`)
    console.log(cpuHealth)
    victory() // checks if cpu HP is 0
}

function closeCombat() {
    cpuHealth -= 30
    console.log(`Mankey used Close Combat!`)
    console.log(cpuHealth)
    victory() // checks if cpu HP is 0
}

function skullBash() {
    cpuHealth -= 20
    console.log(`Mankey used Skull Bash!`)
    console.log(cpuHealth)
    victory() // checks if cpu HP is 0
}



// Dragonite moves

const cpuAttacks = [hyperBeam, dragonRush, hurricane, thunderPunch]

function dragoniteAttack() {
    const random = Math.floor(Math.random() * 4);
    cpuAttacks[random]
    console.log(cpuAttacks[random])
} 

function hyperBeam() {
    playerHealth -= 25
    console.log(`The wild Dragonite used Hyper Beam!`)
    console.log(playerHealth)
    defeat() // checks if user HP is 0
}

function dragonRush() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Dragon Rush!`)
    console.log(playerHealth)
    defeat() // checks if user HP is 0
}

function hurricane() {
    playerHealth -= 35
    console.log(`The wild Dragonite used Hurricane!`)
    console.log(playerHealth)
    defeat() // checks if user HP is 0
}

function thunderPunch() {
    playerHealth -= 20
    console.log(`The wild Dragonite used Thunder Punch!`)
    console.log(playerHealth)
    defeat() // checks if user HP is 0
}

dragoniteAttack()




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

