// -----TODO-----
// Refactor
// ---STRETCH GOALS---
// Try to add 'critical' attack chance
// Add '>' to button on hover?
// Nest game in gameboy color overlay?
// -----------------------------
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
let hyperBeamAudio = new Audio ('./media/HyperBeam.wav')
let hurricaneAudio = new Audio ('./media/Hurricane.wav')
let dragonRushAudio = new Audio ('./media/DragonRush.wav')
let thunderPunchAudio = new Audio ('./media/ThunderPunch.wav')
let lowKickAudio = new Audio ('./media/LowKick.wav')
let scratchAudio = new Audio ('./media/Scratch.wav')
let skullBashAudio = new Audio ('./media/SkullBash.wav')
let closeCombatAudio =  new Audio ('./media/CloseCombat.wav')
let victoryAudio = new Audio ('./media/Victory.mp3')
let defeatAudio = new Audio ('./media/Defeat.mp3')
let instructionsAudio = new Audio ('./media/Instructions.mp3')


// // -----Typewriter text effect-----
// function typeWriter(string, index) {
//     if (index < string.length) {
//         console.log(string[index])
//         // text.textContent += strang.charAt(index);
//         text.innerText += string.charAt(index)
//         setTimeout(typeWriter, 50, string, index+1)
       
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
    stopAudioOnStartButton()
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
    // text.innerText = ""
    // typeWriter("You're up first, MANKEY! Please select an attack!", 0)
    text.innerText = `You're up first, MANKEY! Please select an attack!`
    // typeWriter()
})

// -----Instructions-----
selectButton.addEventListener('click', function () {
    instructionsAudio.play()
    text.style.fontSize = '18px'
    // typeWriter("The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!")
    // text.innerText = ""
    // typeWriter("The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!", 0)
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

// // -----Critical attack function-----
// // damage is undefined and is not making damage * 2. Remove multiplier and have crit function do same attack as orig to create double amount
// function rollForCrit(damageValue) {
//     const random = Math.floor(Math.random() * 5)
//     console.log(random)
//     if (random === 4) {
//         damage = damageValue * 2
//         console.log(`A critical hit! `)
//     }
// }

// -----MANKEY moves-----
function lowKick() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        lowKickAudio.play()
        let damage = 20
        // rollForCrit(20)
        cpuHealth -= damage
        updateCpuHealth()
        text.innerText = `MANKEY used Low Kick! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function scratch() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        scratchAudio.play()
        let damage = 25
        // criticalAttack(25)
        cpuHealth -= damage
        updateCpuHealth()
        text.innerText = `MANKEY used Scratch! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function closeCombat() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        closeCombatAudio.play()
        let damage = 30
        // criticalAttack(30)
        cpuHealth -= damage
        updateCpuHealth()
        text.innerText = `MANKEY used Close Combat! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function skullBash() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        skullBashAudio.play()
        let damage = 20
        // criticalAttack(20)
        cpuHealth -= damage
        updateCpuHealth()
        text.innerText = `MANKEY used Skull Bash! DRAGONITE has ${cpuHealth}hp!`
        userAnimation()
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
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
        cpuAnimation()
        updatePlayerHealth()
        if (playerHealth > 0) {
            text.innerText += ` MANKEY has ${playerHealth}hp!`
            text.innerText += ` It's ${turn}'s turn to attack! Please select an attack!`
        }
        // console.log(cpuAttacks[random])
    }
} 

function hyperBeam() {
    hyperBeamAudio.play()
    let damage = 35
    // criticalAttack(35)
    playerHealth -= damage
    text.innerText = `The wild DRAGONITE used Hyper Beam!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function dragonRush() {
    dragonRushAudio.play()
    let damage = 20
    // criticalAttack(20)
    playerHealth -= damage
    text.innerText = `The wild DRAGONITE used Dragon Rush!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function hurricane() {
    hurricaneAudio.play()
    let damage = 30
    // criticalAttack(30)
    playerHealth -= damage
    text.innerText = `The wild DRAGONITE used Hurricane!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function thunderPunch() {
    thunderPunchAudio.play()
    let damage = 25
    // criticalAttack(25)
    playerHealth -= damage
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
        victoryAudio.play()
        cpuPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` The wild DRAGONITE fainted!  Please press 'START' to battle again!`
    }
}

// -----message if cpu wins-----
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        defeatAudio.play()
        userPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` Your MANKEY fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`
    }
}

function stopAudioOnStartButton() {
    victoryAudio.pause()
    victoryAudio.currentTime = 0
    defeatAudio.pause()
    defeatAudio.currentTime = 0
    instructionsAudio.pause()
    instructionsAudio.currentTime = 0
}