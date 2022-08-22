console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')
const text = document.querySelector('#text')
const cpuHealthBar = document.querySelector('#cpu-health')
const playerHealthBar = document.querySelector('#user-health')
const aButton = document.querySelector('#a')

// a button to clear text. can then add conditional "if turn = dragonite and text = ""... then allow dragonite to attack"
// need to add prompt to tell player to press a button so that dragonite can attack. 
aButton.addEventListener('click', function() {
    if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
        dragoniteAttack()
    }
})

let playerHealth = 100
let cpuHealth = 100
let turn = 'Mankey'


function updatePlayerHealth() {
    if (playerHealth < 0) {
        playerHealth = 0
    }
    playerHealthBar.innerText = playerHealth
}

function updateCpuHealth() {
    if (cpuHealth < 0) {
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
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
        }
    }
}

function scratch() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 25
        console.log(`Mankey used Scratch!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
        }
    }
}

function closeCombat() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 30
        console.log(`Mankey used Close Combat!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
        }
    }
}

function skullBash() {
    if (turn === "Mankey" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 20
        console.log(`Mankey used Skull Bash!`)
        console.log(`Dragonite has ${cpuHealth}hp!`)
        updateCpuHealth()
        victory() // checks if cpu HP is 0
        turn = 'Dragonite'
        if (turn === 'Dragonite' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
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
            console.log(`It's ${turn}'s turn to attack!`)
        }
        // console.log(cpuAttacks[random])
    }
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

