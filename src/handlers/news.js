import { isStockIdValid, fetchStockNews } from '../lib/stock'
import { getNewsListHTMLTemplate } from '../lib/template'

export async function handleStockNews(msg, match) {
  const chatId = msg.chat.id
  const stockId = match[1]

  if (!stockId) {
    return this.sendMessage(chatId, '请带入股号码\ne.g. `/news 2330`', {
      parse_mode: 'Markdown'
    })
  }

  if (!isStockIdValid(stockId)) {
    return this.sendMessage(chatId, '请输入有效股号码\ne.g. `/news 2330`', {
      parse_mode: 'Markdown'
    })
  }

  const newsList = await fetchStockNews(stockId)
  if (!newsList) {
    return this.sendStockIdNotFoundError(chatId, stockId)
  }

  if (!newsList.length) {
    return this.sendMessage(chatId, `查无 ${stockId} 相关新闻`)
  }

  const HTML = getNewsListHTMLTemplate(newsList)
  this.sendMessage(chatId, HTML, {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  })
}
