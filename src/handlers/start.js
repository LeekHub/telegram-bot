export function handleStart(msg) {
  const chatId = msg.chat.id

  this.sendMessage(
    chatId,
    `欢迎使用 LeekHubBot，守护你盘中的便当钱

<b>盘中走势图</b>
<code>/chart 2330</code> - 查询盘中即时走势图
/chart_tse - 查询盘中加权指数走势图
/chart_otc - 查询盘中柜买指数走势图

<b>盘中价量及五档资讯</b>
<code>/text 2330</code> - 查询盘中即时价量及五档
/text_tse - 查询盘中加权指数状态
/text_otc - 查询盘中柜买指数状态

<b>近期 K 线图</b>
<code>/k 2330</code> - 查询指定股票近期 K 线
/k_tse - 查询加权指数近期 K 线
/k_otc - 查询柜买指数近期 K 线

<b>盘后资料</b>
/after_hours - 查询各式盘后资料
<code>/after_hours 2330</code> - 查询个股盘后资料

<b>其他</b>
<code>/news 2330</code> - 查询指定股票相关新闻

资料來源: <a href="https://tw.stock.yahoo.com/">Yahoo!奇摩股市</a>、<a href="https://goodinfo.tw/StockInfo/index.asp">Goodinfo!台灣股市资讯網</a>、<a href="https://www.twse.com.tw/zh/">臺灣證券交易所</a>`,
    {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    }
  )
}
