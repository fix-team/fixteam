const Discord = require('discord.js');
const robot = new Discord.Client();
const prefix = "";
robot.login(process.env.BOT_TOKEN);
robot.on('message', message => {
  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

robot.on('message', function(message) {
    if (message.author.equals(robot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "igor":
              
        var roll = Math.floor(Math.random() * 100) + 1;
            
if (roll >= 0 && roll <= 25) {
  message.channel.sendMessage("Игорь пикнет CHAOS KNIGHT");
} else if (roll >= 25 && roll <= 50) {
  message.channel.sendMessage("Игорь пикнет UNDYING");
} else if (roll >= 50 && roll <= 75) {
  message.channel.sendMessage("Игорь пикнет TUSK");
} else {
  message.channel.send("Игорь пикнет GRIMSTROKE", {files: ["https://pp.userapi.com/c850528/v850528559/74d30/KNHT6o1PsMA.jpg"]});
}
            break;
        case "clear":
            message.channel.fetchMessages()
            .then(function(list){
            message.channel.bulkDelete(list);
            });    
            break;
        case "!leave":
            message.channel.send("", {files: ["https://pp.userapi.com/c852216/v852216507/8bd1b/stttfRGi5Mc.jpg"]});
            break;
        case "random":
            var roll = Math.floor(Math.random() * 100) + 1;
            message.channel.sendMessage("Ты зарандомил цифру " + roll);
            break;
      case "вова":
        message.channel.send("ПАШЁЛ НАХУЙ", {files: ["https://pp.userapi.com/c849528/v849528141/38918/QHCOJfVfT5g.jpg"]});
         break;
        case "info":
            var embed = new Discord.RichEmbed()
                .setDescription("BOT by fixteam")
                .addField("E-mail: fix-team@mail.ru","Thanks for using!!!")
                .setColor(0x00FFFF);
                message.channel.sendEmbed(embed);
            break;
        //default:
            //message.channel.sendMessage("Такой команды не существует");
    }
});
