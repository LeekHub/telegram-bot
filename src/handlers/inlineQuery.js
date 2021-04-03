import { fetchStockData, fetchStockNews, isStockIdValid } from '../lib/stock'
import {
  getIndexHTMLTemplate,
  getNewsListHTMLTemplate,
  getStockHTMLTemplate
} from '../lib/template'
import { tseId, otcId } from '../../config'

export async function handleInlineQuery({ id, query }) {
  if (query === '') {
    const [tseData, otcData] = await Promise.all([
      fetchStockData(tseId),
      fetchStockData(otcId)
    ])

    await this.answerInlineQuery(
      id,
      [
        {
          type: 'article',
          title: '加权指数现价',
          input_message_content: {
            message_text: getIndexHTMLTemplate(tseData),
            parse_mode: 'HTML'
          },
          id: 'text_tse'
        },
        {
          type: 'article',
          title: '柜买指数现价',
          input_message_content: {
            message_text: getIndexHTMLTemplate(otcData),
            parse_mode: 'HTML'
          },
          id: 'text_otc'
        }
      ],
      {
        cache_time: 0
      }
    )
  } else {
    if (isStockIdValid(query)) {
      const result = []
      const [newsList, stockData] = await Promise.all([
        fetchStockNews(query),
        fetchStockData(query)
      ])

      if (stockData.name) {
        result.push({
          type: 'article',
          title: `${query} 報价及五档`,
          input_message_content: {
            message_text: getStockHTMLTemplate(stockData),
            parse_mode: 'HTML'
          },
          id: `text_${query}`
        })
      }

      if (newsList && newsList.length) {
        result.push({
          type: 'article',
          title: `${query} 相关新闻`,
          input_message_content: {
            message_text: getNewsListHTMLTemplate(newsList),
            parse_mode: 'HTML',
            disable_web_page_preview: true
          },
          id: `news_${query}`
        })
      }

      if (result.length) {
        this.answerInlineQuery(id, result, {
          cache_time: 0
        })
      }
    }
  }
}
