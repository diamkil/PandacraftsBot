module.exports = {
	name: 'ping',
	description: 'Ping!',
	args: false,
	usage: '',
	guildOnly: false,
	cooldown: 5,
	aliases: ['pong'],
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
