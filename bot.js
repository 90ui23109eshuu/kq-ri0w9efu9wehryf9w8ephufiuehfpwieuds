const Discord = require('discord.js');
const flixz8 = new Discord.Client();
flixz8.on("ready", () => { 
console.log('By : 3z'); flixz8.user.setPresence({ 
       status: 'online', 
       game: { type: 0, name: 'FlixMc',
       details: `https://discord.gg/29KpKJy`, 
       url: 'http://twitch.tv/flixhost', 
       state: `Deving & Coding`, 
      application_id: '532682436471947264', 

      assets: { 
small_image: `535061300569571329`, 

small_text: 'FlixHost', 
large_image: `535061300569571329`, large_text: `Road To 7k` } 

} 

}); 
});
flixz8.login(process.env.BOT_TOKEN);
