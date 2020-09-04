function startGame() {
    // starting a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    var messageElement  = document.getElementById('messages');
    messageElement!.innerText  =  "Welcome to MultiMath! Starting new game...";
}

function logPlayer(name:string) {
    console.log(`Name game starting for player: ${name }`);
}

document.getElementById('startGame')!.addEventListener('click',  startGame);