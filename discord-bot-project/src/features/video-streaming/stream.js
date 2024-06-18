const axios = require('axios');
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', async (message) => {
  if (message.content === '!stream') {
    try {
      const response = await axios.get('https://api.lesbianpornhub.com/videos');

      const videos = response.data.videos;

      const embed = new Discord.MessageEmbed()
        .setTitle('Lesbian Pornography Selection')
        .setDescription('Choose a video to stream:')
        .setColor('#FF69B4');

      videos.forEach((video, index) => {
        embed.addField(`Video ${index + 1}`, video.title);
      });

      message.channel.send(embed);
    } catch (error) {
      console.error('Error fetching videos:', error);
      message.channel.send('An error occurred while fetching videos. Please try again later.');
    }
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');