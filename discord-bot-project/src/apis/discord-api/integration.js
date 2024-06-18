const Discord = require('discord.js');
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const client = new Discord.Client();
const app = express();
const io = socketio();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/discord-bot-project', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login('your-bot-token');

app.get('/videos', async (req, res) => {
  try {
    const response = await axios.get('https://api.lesbian-porn.com/videos');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});