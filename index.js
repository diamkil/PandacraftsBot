// require the discord.js module
const Discord = require('discord.js');
// require node's filesystem module
const fs = require('fs');
// require the config file
const config = require('./config.json');
// require the token file
const { token } = require('./token.json');
// create the discord client
const client = new Discord.Client();
// create a collection for the commands
client.commands = new Discord.Collection();
// find all .js files in commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
	console.log('Ready!');
});

// require every .js files the commandFiles function gives
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// Command handler
client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// log in using the token in token.json
client.login(token);
