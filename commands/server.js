module.exports = {
  name: "server",
  description: "server information.",
  execute(message, args) {
    message.channel.send(
      `server name: ${message.guild.name}. hosted in: ${message.guild.region}`
    );
  },
};
