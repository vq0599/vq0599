import Document, { Head, Main, NextScript } from 'next/document'
import SVGSprite from 'svg-sprite-loader/runtime/sprite.build'


const SVGSpriteContent = SVGSprite.stringify()

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
          <link href="/static/favicon.ico" rel="icon" />
        </Head>
        <body>
          <span dangerouslySetInnerHTML={{ __html: SVGSpriteContent }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
