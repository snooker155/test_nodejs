var io;
var gameSocket;



function hostCreateNewGame() {
    var thisGameId = (Math.random() * 100000) | 0;
    this.emit('newGameCreated', {gameId: thisGameId, mySocketId: this.id});
    this.join(thisGameId.toString());
}