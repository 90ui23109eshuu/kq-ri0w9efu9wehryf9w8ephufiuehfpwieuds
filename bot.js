const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('message', message => {
    if(message.author.id !== flixz8.user.id) return;
    var words = ["كسمك","قحبة","خنيث","منيوك"];
    if(words.some(word => message.content.includes(word))) {
        message.edit('استغفر الله .');
    }
});

flixz8.on('guildMemberAdd', member => {
    if(member.guild.id !== '428690920246870016') return;
    setTimeout(() => {
        flixz8.channels.get('485710163966296064').send(`${member} WelCome To **FlixHost**`);
    }, 1500)
});

flixz8.login(process.env.BOT_TOKEN);
