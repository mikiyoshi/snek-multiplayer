#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const { connect } = require('./client');
const { setupInput } = require('./input');
const game = new Game(new UserInterface(), new RemoteInterface());

// Begin game
game.start();

// Begin Localhost

console.log('Connecting ...');
const conn = connect();

setupInput(conn);
