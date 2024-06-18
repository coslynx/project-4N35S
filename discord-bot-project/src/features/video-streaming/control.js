const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'control',
    description: 'Control video playback and volume',
    execute(message, args) {
        if (!message.member.voice.channel) {
            return message.channel.send('You need to be in a voice channel to control the video.');
        }

        const serverQueue = message.client.queue.get(message.guild.id);

        if (!serverQueue) {
            return message.channel.send('There is no video playing.');
        }

        if (args[0].toLowerCase() === 'play') {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('Resumed the video.');
        } else if (args[0].toLowerCase() === 'pause') {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send('Paused the video.');
        } else if (args[0].toLowerCase() === 'volume') {
            const newVolume = parseInt(args[1]);

            if (isNaN(newVolume) || newVolume < 0 || newVolume > 100) {
                return message.channel.send('Please provide a valid volume level (0-100).');
            }

            serverQueue.volume = newVolume;
            serverQueue.connection.dispatcher.setVolumeLogarithmic(newVolume / 100);
            return message.channel.send(`Set the volume to ${newVolume}.`);
        } else {
            return message.channel.send(`Invalid control command. Usage: ${prefix}control play/pause/volume <value>`);
        }
    }
};