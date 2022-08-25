// -----TODO-----
// Refactor
// ---STRETCH GOALS---
// Try to add 'critical' attack chance
// Add '>' to button on hover?
// Nest game in gameboy color overlay?
// -----------------------------
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
// let damage

// -----Typewriter text effect-----
// function typeWriter() {
//     let i = 0
//     let speed = 50
//     if (i < text.length) {
//         text.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed)
//     }
// }

// const textInBox = text.innerText
// let interval
// let index = 0

// interval = setInterval(typeWriter, 200)
// function typeWriter() {
//     if (index >= textInBox.length) {
//         clearInterval(interval)
//     } else {
//         (text).append(text[index])
//         index++
//     }
// }


// -----Advance turn and DRAGONITE attack-----
aButton.addEventListener('click', function() {
    if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
        dragoniteAttack()
     }
})

// -----GAME RESET BUTTON-----
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
    // typeWriter()
})

// -----Instructions-----
selectButton.addEventListener('click', function () {
    // typeWriter()
    text.style.fontSize = '18px'
    text.innerText = `The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!`
})

// -----Health bar functions-----
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

// -----Attack buttons-----
attackOne.addEventListener('click', lowKick)
attackTwo.addEventListener('click', scratch)
attackThree.addEventListener('click', closeCombat)
attackFour.addEventListener('click', skullBash)

// -----Critical attack function-----
// damage is undefined and is not making damage * 2. 
function criticalAttack(dmg) {
    const random = Math.floor(Math.random() * 5)
    let damage = dmg
    console.log(random)
    if (random === 4) {
        cpuHealth -= damage
        console.log(damage)
        console.log(`A critical hit! `)
    }
}


// -----MANKEY moves-----
function lowKick() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        let damage = 20
        criticalAttack(20)
        cpuHealth -= damage
        console.log(`MANKEY used Low Kick!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Low Kick! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
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
        criticalAttack(25)
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
        criticalAttack(30)
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
        criticalAttack(20)
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



// -----DRAGONITE moves-----
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
    let damage = 25
    playerHealth -= damage
    console.log(`The wild DRAGONITE used Thunder Punch!`)
    text.innerText = `The wild DRAGONITE used Thunder Punch!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

// -----ATTACK ANIMATION-----
function userAttackAnimation() {
    userPokemon.style.float = 'right'
    cpuPokemon.style.visibility = 'hidden'
}
function userAttackResetAnimation() {
    userPokemon.style.float = 'left'
    if (cpuHealth > 0) {
        cpuPokemon.style.visibility = 'visible'
    }
}

function userAnimation() {
    userAttackAnimation()
    setTimeout(userAttackResetAnimation, 100)
}

function cpuAttackAnimation() {
    cpuPokemon.style.float = 'left'
    userPokemon.style.visibility = 'hidden'
}

function cpuAttackResetAnimation() {
    cpuPokemon.style.float = 'right'
    if (playerHealth > 0) {
        userPokemon.style.visibility = 'visible'
    }
}

function cpuAnimation() {
    cpuAttackAnimation()
    setTimeout(cpuAttackResetAnimation, 100)
}


// -----message if player wins-----
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

// -----message if cpu wins-----
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        // turn = 'gameOver'
        // typeWriter()
        userPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` Your MANKEY fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`
        console.log(`Your MANKEY fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`)
    }
}

