const { Command } = require('discord.js');

module.exports = class VolumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'volume',
            aliases: ['vol'],
            description: 'Adjust the volume of the video playback.',
            usage: '<volume level>',
            cooldown: 3,
            args: true,
            guildOnly: true,
        });
    }

    async run(message, args) {
        const { voice } = message.member;

        if (!voice.channel) {
            return message.reply('You need to be in a voice channel to use this command!');
        }

        const volumeLevel = parseInt(args[0]);

        if (isNaN(volumeLevel) || volumeLevel < 0 || volumeLevel > 100) {
            return message.reply('Please provide a valid volume level between 0 and 100.');
        }

        const connection = await voice.channel.join();
        const dispatcher = connection.play('path/to/video.mp4');

        dispatcher.setVolume(volumeLevel / 100);

        message.channel.send(`Volume set to ${volumeLevel}%`);
    }
};