import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="keywords" content="黄努努,博客,vq0599" />
          <meta name="description" content="黄努努的个人网站" />
          <link href="//fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
          <link href="//at.alicdn.com/t/font_1012682_uktshq56uhh.css" rel="stylesheet" />
          <link href="/static/favicon.ico" rel="icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
