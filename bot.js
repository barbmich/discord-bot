const Discord = require("discord.js");
const {
  prefix,
  meaning_of_life,
  passwords_array,
  secret_passcodes,
} = require("./config.json");
const client = new Discord.Client();
require("dotenv").config();

const token = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    msg.channel.send("Pong!");
  } else if (command === "beep") {
    msg.channel.send("Boop!");
  } else if (command === "server") {
    msg.channel.send(
      `nome del server: ${msg.guild.name}. non so cosa sia guild.region ma: ${msg.guild.region}`
    );
  } else if (command === "gabagool") {
    msg.reply("gabagool? Over heere 👇️👇️");
  }
});

client.login(token);
