if (process.env.NODE_ENV !== "production") require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = ">";

client.once("ready", () => {
  console.log("Umbra Bot is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong");
  } else if (command == "apply") {
    message.channel.send(`Apply For The Guild In ${message.guild.channels.cache.find((c) => c.name === "ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ")?.toString()}`);
  }
});

client.login(process.env.TOKEN);
