// require the discord.js module
const Discord = require('discord.js');
// require the config file
const config = require('./config.json');
// require the token file
const { token } = require('./token.json');
// create the discord client
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// logs every message the bot received
client.on('message', message => {
	console.log(message.content);
  // reply to !ping by "pong"
  if (message.content.startsWith(`${config.prefix}ping`)) {
  	// send back "Pong." to the channel the message was sent in
  	message.channel.send('Pong.');
  }
	else if (message.content === `${config.prefix}server-name`) {
	message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
});

// log in using the token in token.json
client.login(token);
