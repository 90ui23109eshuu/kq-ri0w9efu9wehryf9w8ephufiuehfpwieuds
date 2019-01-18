const Discord = require('discord.js');
const flixz8 = new Discord.Client();
flixz8.on("ready", () => { 
flixz8.on('message', dark => {
    
    if (dark.content === "kld") {
        setInterval(function(){
        flixz8.edit('**ك**')    
        flixz8.edit('**كس**')    
        flixz8.edit('**كس ا**')
        flixz8.edit('**كس ام**')
        flixz8.edit('**كس امك**')
        flixz8.edit('**كس امك ي**')
        flixz8.edit('**كس امك يا*')
        flixz8.edit('**كس امك يا خ**')
        flixz8.edit('**كس امك يا خا**')
        flixz8.edit('**كس امك يا خال**')
        flixz8.edit('**كس امك يا خالد **')
        flixz8.edit(':kiss:')
        flixz8.edit(':kiss:')
        flixz8.edit(':kiss:')
        flixz8.edit(':kiss:')
        }, 900)
    }
    
})
flixz8.login(process.env.BOT_TOKEN);
