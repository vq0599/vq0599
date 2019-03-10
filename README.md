# vq0599
在刚毕业之际，我基于Hexo搭建了人生中第一个个人博客。
两年多过去了，我也由当初的“打杂工程师”进化为一名“伪全栈工程师”，当初的静态网站已经无法满足我的需求啦！于是历时三个月，终于把一个**前后端分离同构渲染**的个人网站完成了。之前社区有一道很火的面试题“从输入url到页面加载完成发生了什么”，涉及到非常多的知识理论。但是因为站在巨人的肩膀上，实践比起理论要简单许多。这篇文章将以我搭建个人网站的经历为依据，从零开始实践“从输入url到页面加载完成发生了什么”。
<!-- more -->

## 技术栈
- 前端：Node.js（Next.js）
- 后端：Golang（Gin）
- 数据库：MySQL
- 部署：Nginx、PM2、Linux nohup

## 域名和服务器
首先当然是准备好软妹币啦！在阿里云购买了域名[www.vq0599.com](https://www.vq0599.com)，腾讯云购买的虚拟云主机（centOS 7.2），然后在阿里云的控制台里将域名解析至IP就好了。

## 部署web服务器
将域名解析配置好之后，当用访问访问我们的*.vq0599.com的时候，实际是访问到211.159.162.125服务器上的80（443）端口的。我们需要一个部署web服务器来承接用户的访问和应用服务。于是在服务器上安装了一个Nginx，并配置相应的转发规则。
```bash
# www.vq0599.com域名 转发至Next.js服务
server {
  server_name  www.vq0599.com

  location / {
      proxy_pass    http://localhost:8001;
  }
}

# api.vq0599.com域名 转发至Golang服务
server {
  server_name  api.vq0599.com

  location / {
      proxy_pass    http://localhost:8002;
  }
}

# ... 实际上还有一些其它域名
```
## HTTPS
https当然是不可或缺的，抛开安全性不说，没发现每个浏览器对于https的网站都更好看么？233333~
这个年代，总有许多巨人给予我们可靠的肩膀~ [Let’s Encrypt](https://letsencrypt.org/)就是其中之一，为我们提供免费的https授权证书。关于使用教程，官方推荐了客户端[Certbot](https://certbot.eff.org)，文档非常友好，强烈建议直接阅读原版英文文档。中文教程许多参差不齐，即使有一些写的不错的，也不见得是你搜到的~

## API服务
当用户访问api.vq0599.com域名时，就会被转发至Golang服务。个人网站的后端服务，其实是比较简单的啦（复杂我也不会呀）~可以简单描述为：
```js
request >> 路由 >> 鉴权 >> request参数处理 >> 数据库交互 >> response数据处理 >> response
```
具体地说当然还涉及到一些代码层面的细节，比如鉴权体系。有兴趣可以去看看源码[vq0599-server](https://github.com/vq0599/vq0599-server)。

## 前端服务
[Next.js](https://github.com/zeit/next.js)是基于React的同构渲染框架，谁用谁“真香”。简单地说一下个人认知范围内的原理，当用户发起访问一个页面时，Next会：
1. 向API服务请求数据。（如果需要）
2. 调用[react-dom/server](https://reactjs.org/docs/react-dom-server.html)提供的`renderToString`将首屏渲染成HTML，其它页面则会被打包（实际上还涉及到[Code Splitting](https://webpack.js.org/guides/code-splitting/)）成可执行的JavaScript代码，返还给客户端。

当用户通过前端路由访问其它页面时，直接由客户端JavaScript渲染，即**首屏服务端渲染的SPA应用**。解决了SEO问题，提高了首屏速度，又不失去SPA的良好体验~一句“真香”当之无愧。

## 总结
以流水账的形式记录了一下从0到1搭建一个网站的过程，似乎难度倒是没有什么，不过是在一些细节上花了许多时间，比如API规范、UI（跪求设计师指点）等。之所以打算重构旧版本的静态博客，除了用有一个自由度更大的网站外，更重要的是可以把自己学习的服务端知识落地到具体的应用上~ 毕竟现代化的前端，人人都是伪全栈嘛~ 逃~
