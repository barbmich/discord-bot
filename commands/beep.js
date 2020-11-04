module.exports = {
  name: "beep",
  description: "beeps the bot.",
  execute(message, args) {
    message.channel.send("Boop!");
  },
};
