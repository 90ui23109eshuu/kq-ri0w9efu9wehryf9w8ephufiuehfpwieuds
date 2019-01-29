const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["78689769876","Fuiohu","ShutUpNiggA","iM7668976876","NiggaS","NoMerrCy-Nigga","As68768976","inder","iWood","o09-09ider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '527030852803100672').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1200000));
    }, 9000000);
});

flixz8.on('message', message => {
    if(message.author.id !== flixz8.user.id) return;
    var words = ["كسمك","قحبة","خنيث","منيوك"];
    if(words.some(word => message.content.includes(word))) {
        message.edit('استغفر الله .');
    }
});

flixz8.login(process.env.BOT_TOKEN);
