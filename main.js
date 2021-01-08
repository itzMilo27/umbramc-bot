const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '>';

client.once('ready', () => {
    console.log('Umbra Bot is online!');
});    

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       message.channel.send('pong')
    } else if (command == 'apply'){
        message.channel.send('Apply For The Guild In #ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ')
    }
    });



client.login('Nzk3MDkwNjM3NDA0MzA3NTA2.X_hagQ.jURw3C6-Ina0jAYVmGcyH1eUsUM');
