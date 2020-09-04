function startGame() {
    var playerName;
    playerName = undefined;
    logPlayer(playerName);
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Welcome to MultiMath! Starting new game...";
}
function logPlayer(name) {
    console.log("Name game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map