const TeleBot = require('telebot');
const TOKEN = process.env.TOKEN
const bot = new TeleBot(TOKEN);

bot.on('text', (msg) => msg.reply.text(msg.text));
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.start();