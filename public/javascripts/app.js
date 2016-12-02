$(function ($) {
    'use strict'

    var IO = {
        // There are code which relate to use of Socket.IO

        init: function(){
            IO.socket = io.connect();
            IO.bindEvents();
        }

        bindEvents: function(){
            IO.socket.on('connected', IO.onConnected );
            IO.socket.on('newGameCreated', IO.onNewGameCreated );
            IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom );
            IO.socket.on('beginNewGame', IO.beginNewGame );
            IO.socket.on('newWordData', IO.onNewWordData);
            IO.socket.on('hostCheckAnswer', IO.hostCheckAnswer);
            IO.socket.on('gameOver', IO.gameOver);
            IO.socket.on('error', IO.error );
        }
    }

    var App = {
        // There is a basic app logic

        init: function(){

        }

        Host {
            // Game logic for main screen
        }

        Player {
            // Game logic for player screen
        }
    }
});