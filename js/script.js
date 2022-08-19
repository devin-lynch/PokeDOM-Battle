console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')
console.log(textBar)
let playerHealth = 100
let cpuHealth = 100

// Need to determine if using 'real' pokemon or something else for characters (like dog vs mailman)
// Can then decide on attacks

// MVP cpu has one attack -- can add more after battle is working. Player will have 2-4 to choose from. 

// Stretch goal: make an ability that enhances the next turns ability?


// Mankey moves
function lowKick() {
    cpuHealth - 20
}

function scratch() {
    cpuHealth - 25
}

function closeCombat() {
    cpuHealth - 30
}


// Dragonite moves
function hyperBeam() {
    playerHealth - 25
}

function dragonRush() {
    playerHealth - 20
}


function attack() {

}



//message if player wins
function victory() {
    if (cpuHealth <= 0) { 

    }
}

//message if cpu wins
function defeat() {
    if (playerHealth <= 0) {

    }
}

