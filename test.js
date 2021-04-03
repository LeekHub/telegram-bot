require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const Agent = require('socks5-https-client/lib/Agent')
// replace the value below with the Telegram token you receive from @BotFather
const token = 'ssss'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: '127.0.0.1',
      socksPort: '1086'
    }
  }
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message')
})
