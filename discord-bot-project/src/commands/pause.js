const pauseCommand = {
  name: 'pause',
  description: 'Pause the current video being streamed',
  execute(message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      message.channel.send('⏸️ Paused the video!');
    } else {
      message.channel.send('There is no video playing to pause!');
    }
  },
};

module.exports = pauseCommand;