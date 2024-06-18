const { Client, Message } = require('discord.js');

/**
 * Skip Command
 * Skips the current video and plays the next one in the queue.
 */
module.exports = {
    name: 'skip',
    description: 'Skip the current video',
    execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);

        if (!message.member.voice.channel) {
            return message.channel.send('You need to be in a voice channel to skip the music!');
        }
        if (!serverQueue) {
            return message.channel.send('There is no song that I could skip!');
        }

        serverQueue.connection.dispatcher.end();
    },
};