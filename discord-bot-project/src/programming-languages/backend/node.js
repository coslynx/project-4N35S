const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const { Client, Intents } = require('discord.js');
const socket = require('socket.io');

const app = express();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const io = socket();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/discord-bot', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Discord bot token
const token = 'YOUR_DISCORD_BOT_TOKEN';

// Discord bot login
client.login(token);

// Discord bot ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Discord bot message event
client.on('messageCreate', async (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Socket.io connection event
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Express server
const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});