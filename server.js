const express = require('express');
const app = express();
const TeleBot = require('telebot');
const TOKEN = process.env.TOKEN
const bot = new TeleBot(TOKEN);

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Hola Jhoel todo bien con la prueba')
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});



bot.on('text', (msg) => msg.reply.text(msg.text));
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
bot.start();