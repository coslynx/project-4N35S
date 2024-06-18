const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is ready');
});

client.on('messageCreate', async message => {
    if (message.content === '!hello') {
        message.reply('Hello!');
    }
});

client.login('your-bot-token');