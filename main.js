const fs = require('node:fs')
const dotenv = require('dotenv')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

dotenv.config();

const port = 4300;

app.use(express.json());

app.get('/test', async (req, res) => {
  try {
    const channels = client.channels.cache.get(process.env.CHANNEL_ID)
    channels.send(`test`)  
  } catch (err) {
    console.log(err)
    res.send(err)
  }

})

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]})

client.commands = new Collection();

client.login(process.env.DISCORD_TOKEN)

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});