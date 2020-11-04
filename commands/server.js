module.exports = {
  name: "server",
  description: "server information.",
  execute(message, args) {
    message.channel.send(
      `server name: ${msg.guild.name}. hosted in: ${msg.guild.region}`
    );
  },
};
