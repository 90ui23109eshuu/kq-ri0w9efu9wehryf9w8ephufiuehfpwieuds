const Discord = require('discord.js');
const flixz8 = new Discord.Client();
flixz8.on("ready", () => { 
flixz8.on('message', dark => {
    
    if (dark.content === "kld") {
        setInterval(function(){
        dark.edit('**ك**')    
        dark.edit('**كس**')    
        dark.edit('**كس ا**')
        dark.edit('**كس ام**')
        dark.edit('**كس امك**')
        dark.edit('**كس امك ي**')
        dark.edit('**كس امك يا*')
        dark.edit('**كس امك يا خ**')
        dark.edit('**كس امك يا خا**')
        dark.edit('**كس امك يا خال**')
        dark.edit('**كس امك يا خالد **')
        dark.edit(':kiss:')
        dark.edit(':kiss:')
        }, 900)
    }
    
})
flixz8.login(process.env.BOT_TOKEN);
