/// <reference path="player.ts" />
/// <reference path="game.ts" />

// function startGame() {
//     // starting a new game

//     let playerName: string | undefined = getInputValue('playername');
//     logPlayer(playerName);
//     postScore(80, playerName);
//     postScore(-5, playerName);
    
// }

// function logPlayer(name:string = 'MultiMath Player') :void {
//     console.log(`Name game starting for player: ${name }`);
// }

// function postScore(score:number, playerName: string = 'MultiMath Player') : void {
//     // Variable to reference functions with string parameter and no return type
//     let logger : (value: string) => void;
//     if(score < 0 ) {
//         logger = logError;
//     } else  {
//         logger = logMessage;
//     }

//     const scoreElement : HTMLElement | null = document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} - ${playerName}`;
//     logger(`Score: ${score }`);
// }

// document.getElementById('startGame')!.addEventListener('click',  startGame);

// // Arrow Functions
// const  logMessage = (message:string) => console.log(message);
// // logMessage('Welcome to MultiMath');

// function logError(error:string): void{
//     console.error(error);
// }

// // let myResult : Result = {
// //     playerName: 'Marie',
// //     score: 5,
// //     problemCount: 5,
// //     factor: 7
// // }

// // let player : Person = {
// //     name: 'Roshan ',
// //     formatName: () => 'Dan'
// // }

// const firstPlayer : Player = new Player();
// firstPlayer.name = 'Roshan ';
// console.log(firstPlayer.formatName());

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});