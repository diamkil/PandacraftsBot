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

// Command handler
client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	}
	else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	// other commands...
});

// log in using the token in token.json
client.login(token);
