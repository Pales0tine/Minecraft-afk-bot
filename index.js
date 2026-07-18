const bedrock = require('bedrock-protocol');
const http = require('http');
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(8080);
function startBot() {
  const bot = bedrock.createClient({
    host: '5ld_501.aternos.me',
    port: 11529,
    username: 'AFK_Bot_Mobile',
    offline: true,
    version: '1.26.0.2'
  });
  bot.on('spawn', () => console.log('البوت دخل!'));
  bot.on('close', () => setTimeout(startBot, 5000));
  bot.on('error', (err) => console.log(err.message));
}
startBot();
