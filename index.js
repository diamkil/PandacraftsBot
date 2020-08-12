// require the discord.js module
const Discord = require('discord.js');
// require the token file
const token = require('./token.json');
// create the discord client
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// logs every message the bot received
client.on('message', message => {
	console.log(message.content);
  // reply to !ping by "pong"
  if (message.content === '!ping') {
  	// send back "Pong." to the channel the message was sent in
  	message.channel.send('Pong.');
  }
});

// log in using the token in token.json
client.login(token.token);
