// TODO
// Make the pokemon that takes damage shake upon receiving damage
// Make the attacking pokemon do a dash motion
// Try to add 'critical' attack chance
// Add '>' to button on hover?

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
let turn //= 'MANKEY'

function typeWriter() {
    let i = 0
    let speed = 50
    if (i < text.length) {
        text.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}
// typeWriter()

// a button to clear text. can then add conditional "if turn = DRAGONITE and text = ""... then allow DRAGONITE to attack"
// need to add prompt to tell player to press a button so that DRAGONITE can attack. 
aButton.addEventListener('click', function() {
    if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
        dragoniteAttack()
     }
})

// GAME RESET BUTTON
startButton.addEventListener('click', function() {
    text.style.fontSize = '22px'
    userPokemon.style.visibility = 'visible'
    cpuPokemon.style.visibility = 'visible'
    playerHealth = 100
    cpuHealth = 100
    updatePlayerHealth()
    updateCpuHealth()
    cpuHealthBar.innerText = cpuHealth
    playerHealthBar.innerText = playerHealth
    turn = 'MANKEY'
    text.innerText = `You're up first, MANKEY! Please select an attack!`
})

selectButton.addEventListener('click', function () {
    // typeWriter()
    text.style.fontSize = '18px'
    text.innerText = `The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!`
})


function updatePlayerHealth() {
    if (playerHealth < 0) { // makes sure hp does not show a negative amount. 
        playerHealth = 0
    }
    // changes health color depending on current hp
    if (playerHealth > 50) {
        playerHealthZone.style.backgroundColor = 'rgba(49, 228, 49, 0.355)'
    } else if (playerHealth > 20) {
        playerHealthZone.style.backgroundColor = 'rgba(207, 253, 0, 0.662)'
    } else {
        playerHealthZone.style.backgroundColor = 'rgba(240, 31, 12, 0.355)'
    }
    playerHealthBar.innerText = playerHealth
}

function updateCpuHealth() {
    if (cpuHealth < 0) { // makes sure hp does not show a negative amount. 
        cpuHealth = 0
    }
    // changes health color depending on current hp
    if (cpuHealth > 50) {
        cpuHealthZone.style.backgroundColor = 'rgba(49, 228, 49, 0.355)'
    } else if (cpuHealth > 20) {
        cpuHealthZone.style.backgroundColor = 'rgba(207, 253, 0, 0.662)'
    } else {
        cpuHealthZone.style.backgroundColor = 'rgba(240, 31, 12, 0.355)'
    }
    cpuHealthBar.innerText = cpuHealth
}
// Need to alternate turns and ensure DRAGONITE does not immediately attack after MANKEY attacks. 
// Can make an 'a' button to advance text.


// Stretch goal: make an ability that enhances the next turns ability?

// Attack buttons
attackOne.addEventListener('click', lowKick)
attackTwo.addEventListener('click', scratch)
attackThree.addEventListener('click', closeCombat)
attackFour.addEventListener('click', skullBash)

// damage is undefined and is not making damage * 2. 
// function criticalAttack() {
//     const random = Math.floor(Math.random() * 5)
//     let damage
//     console.log(random)
//     if (random === 4) {
//         damage *= 2
//     }
// }


// MANKEY moves
function lowKick() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        let damage = 20
        // criticalAttack()
        cpuHealth -= damage
        console.log(`MANKEY used Low Kick!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Low Kick! DRAGONITE has ${cpuHealth}hp!`
        // userAttackAnimation()
        userAnimation()
        victory() // checks if cpu HP is 0
        // cpuTakeDamage()
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function scratch() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        let damage = 25
        cpuHealth -= damage
        console.log(`MANKEY used Scratch!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Scratch! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function closeCombat() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        let damage = 30
        cpuHealth -= damage
        console.log(`MANKEY used Close Combat!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Close Combat! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function skullBash() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        let damage = 20
        cpuHealth -= damage
        console.log(`MANKEY used Skull Bash!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Skull Bash! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}



// DRAGONITE moves

const cpuAttacks = [hyperBeam, dragonRush, hurricane, thunderPunch]

function dragoniteAttack() {
    if (playerHealth > 0 && cpuHealth > 0) {
        const random = Math.floor(Math.random() * 4);
        cpuAttacks[random]()
        console.log(`MANKEY has ${playerHealth}hp!`)
        cpuAnimation()
        updatePlayerHealth()
        if (playerHealth > 0) {
            text.innerText += ` MANKEY has ${playerHealth}hp!`
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Please select an attack!`
        }
        // console.log(cpuAttacks[random])
    }
} 


function hyperBeam() {
    let damage = 25
    playerHealth -= damage
    console.log(`The wild DRAGONITE used Hyper Beam!`)
    text.innerText = `The wild DRAGONITE used Hyper Beam!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function dragonRush() {
    let damage = 20
    playerHealth -= damage
    console.log(`The wild DRAGONITE used Dragon Rush!`)
    text.innerText = `The wild DRAGONITE used Dragon Rush!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function hurricane() {
    let damage = 35
    playerHealth -= damage
    console.log(`The wild DRAGONITE used Hurricane!`)
    text.innerText = `The wild DRAGONITE used Hurricane!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function thunderPunch() {
    let damage = 20
    playerHealth -= damage
    console.log(`The wild DRAGONITE used Thunder Punch!`)
    text.innerText = `The wild DRAGONITE used Thunder Punch!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

// function cpuTakeDamage() {
//     shake =
//         0% { transform: translate(1px, 1px) rotate(0deg); }
//         10% { transform: translate(-1px, -2px) rotate(-1deg); }
//         20% { transform: translate(-3px, 0px) rotate(1deg); }
//         30% { transform: translate(3px, 2px) rotate(0deg); }
//         40% { transform: translate(1px, -1px) rotate(1deg); }
//         50% { transform: translate(-1px, 2px) rotate(-1deg); }
//         60% { transform: translate(-3px, 1px) rotate(0deg); }
//         70% { transform: translate(3px, 1px) rotate(-1deg); }
//         80% { transform: translate(-1px, -1px) rotate(1deg); }
//         90% { transform: translate(1px, 2px) rotate(0deg); }
//         100% { transform: translate(1px, -2px) rotate(-1deg); }
      
//     cpuPokemon.style.animation = shake  0.5s
// }

// function playerTakeDamage() {
//     userPokemon.style.animation = shake  0.5s
// }


function userAttackAnimation() {
    userPokemon.style.float = 'right'
}
function userAttackResetAnimation() {
    userPokemon.style.float = 'left'
}

function userAnimation() {
    userAttackAnimation()
    setTimeout(userAttackResetAnimation, 200)
}

function cpuAttackAnimation() {
    cpuPokemon.style.float = 'left'
}

function cpuAttackResetAnimation() {
    cpuPokemon.style.float = 'right'
}

function cpuAnimation() {
    cpuAttackAnimation()
    setTimeout(cpuAttackResetAnimation, 200)
}


//message if player wins
function victory() {
    // Ensure you can't continue attacking after victory
    if (cpuHealth <= 0) { 
        // turn = 'gameOver'
        // typeWriter()
        cpuPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` The wild DRAGONITE fainted!  Please press 'START' to battle again!`
        console.log(`The wild DRAGONITE fainted!`)
    }
}

//message if cpu wins
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        // turn = 'gameOver'
        // typeWriter()
        userPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` Your MANKEY fainted! You were overwhelmed by your defeat!`
        console.log(`Your MANKEY fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`)
    }
}

