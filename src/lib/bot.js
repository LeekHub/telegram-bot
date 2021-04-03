import TelegramBot from 'node-telegram-bot-api'
import { botToken } from '../../config'
import { handleCallbackQuery } from '../handlers/callbackQuery'
import { handleInlineQuery } from '../handlers/inlineQuery'
const Agent = require('socks5-https-client/lib/Agent')

const bot = new TelegramBot(botToken, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: '127.0.0.1',
      socksPort: '1086'
    }
  }
})
bot.route = (routeConfig) => {
  Object.entries(routeConfig).forEach(([regex, handler]) => {
    bot.onText(new RegExp(regex), handler.bind(bot))
  })
}

bot.on('callback_query', handleCallbackQuery.bind(bot))
bot.on('inline_query', handleInlineQuery.bind(bot))

bot.sendLoadingMsg = async (chatId) => {
  const { message_id } = await bot.sendMessage(chatId, '处理中，请稍候...', {
    disable_notification: true
  })

  return () => {
    return bot.deleteMessage(chatId, message_id)
  }
}

bot.sendStockIdNotFoundError = (chatId, stockId) => {
  bot.sendMessage(chatId, `查无 ${stockId}，请确认此股票已上市/柜`)
}

bot.sendTimeoutError = async (chatId) => {
  const { message_id } = await bot.sendMessage(
    chatId,
    '發生了些問題，请再試一次...'
  )
  setTimeout(() => {
    bot.deleteMessage(chatId, message_id)
  }, 5000)
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message')
})

export default bot
