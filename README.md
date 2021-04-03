# telegram-bot

基于 [tw-stock-telegram-bot](https://github.com/x3388638/tw-stock-telegram-bot) 修改。

TG 机器人，快速取得个股及大盘即时走势、近期 K 线、相关新闻、盘后资料等，让你在各种不方便打开充满高对比红绿黑看盘软件的场合 (如拥挤的捷运上或办公室而且老板坐你后面) 也能掌握即时报价资讯。

![](https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/7de5bf604e5f01d76febe5f668088c2a4518ff1c/tstb-1.png)

## Demo

`@LeekHubBot`  
https://t.me/LeekHubBot  
(学术研究开发测试使用，不提供 24/7 不中断服务，亦不保证资料之正确性)

## 如何使用

### 前置工作

请先找到 `@BotFather` [建立新的 Bot](https://core.telegram.org/bots#6-botfather) 取得 API token，应用 [inline mode](https://core.telegram.org/bots/inline) 以及设定 commands (`/setcommands`)
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/7de5bf604e5f01d76febe5f668088c2a4518ff1c/tstb-2.png" width="250" />

### 执行

#### 1.

```
git clone https://github.com/x3388638/tw-stock-telegram-bot.git
cd tw-stock-telegram-bot
cp config.js.example config.js
# 将 Bot API token 填入 config.js 中 `botToken`
```

#### 2.

```
npm run build
npm start
```

或

```
npm install
npm run dev:watch
```

### Heroku

https://devcenter.heroku.com/articles/container-registry-and-runtime#getting-started

#### Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```
$ heroku login
```

#### Log in to Container Registry

You must have Docker set up locally to continue. You should see output when you run this command.

```
$ docker ps
```

Now you can sign into Container Registry.

```
$ heroku container:login
```

#### Push your Docker-based app

Build the Dockerfile in the current directory and push the Docker image.

```
$ heroku container:push web
```

#### Deploy the changes

Release the newly pushed images to deploy your app.

```
$ heroku container:release web
```

## 功能

### `/start` 导览信息

<details>
 <img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-3.jpg" width="350" />
</details>

### `/chart` 盘中走势图

<details>
<p><code>/chart ${stockId}</code> 查询个股</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-4.jpg" width="350" />

<p><code>/chart_tse</code> 查询上市指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-5.jpg" width="350" />

<p><code>/chart_toc</code> 查询指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-6.jpg" width="350" />
</details>

### `/text` 盘中文字報价及五档

<details>
<p><code>/text ${stockId}</code> 查询个股</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-7.jpg" width="350" />

<p><code>/text_tse</code> 查询上市指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-8.jpg" width="350" />

<p><code>/text_otc</code> 查询指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/1bcfd58e76649350744ea1b6b32e78a470b239d2/tstb-9.jpg" width="350" />
</details>

### `/k` 近期 K 线图

<details>
<p><code>/k ${stockId}</code> 查询个股</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-10.jpg" width="350" />

<p><code>/k_tse</code> 查询上市指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-11.jpg" width="350" />

<p><code>/k_otc</code> 查询指数</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-12.jpg" width="350" />
</details>

### `/news` 个股新闻

<details>
 <img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-13.jpg" width="350" />
</details>

### `/after_hours` 盘后资料

<details>
<p><code>/after_hours ${stockId}</code> 查询个股盘后资料</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/b708a1b02ff439069b76837876b9d7ccce499ee5/tstb-19.jpg" width="350" />

<p><code>/after_hours</code> 查询其他盘后资料</p>
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-14.jpg" width="350" />
</details>

### Inline mode

<details>
<p><img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-15.jpg" width="350" /></p>
<p><img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-16.jpg" width="350" /></p>
<p><img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-17.jpg" width="350" /></p>
<p><img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/113f34ff1732b8ee8e438d573cd06db185cc3b1f/tstb-18.jpg" width="350" /></p>
</details>

## LICENSE

MIT
