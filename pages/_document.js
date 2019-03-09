import Document, { Head, Main, NextScript } from 'next/document'
import SVGSprite from 'svg-sprite-loader/runtime/sprite.build'
import config from 'config'


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
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="keywords" content={config.META_KEYWORDS} />
          <meta name="description" content={config.META_DESCRIPTION} />
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
