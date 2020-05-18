console.log('Loading, please wait a moment.')

Discord = require('discord.js');
client = new Discord.Client();

const {
	token
} = require ('./config.json');
const config = require('./config.json')

//Login
client.login(token);

//Bootup check
client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageReactionAdd", (reaction, user) => {
    console.log('Reaction')
    if(reaction.emoji.id == "712020346878034081"){
        console.log('hax is an idiot')
        const role = reaction.message.guild.roles.cache.find(role => role.name === "test");
      reaction.message.channel.send('Added role.')
      console.log('hax is an idiot')
        message.guild.role.add(role)
  }
  });