import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
// why ? 这样antd的默认样式就会被打包在最前面了
import { Icon } from 'antd'
import 'styles/index.scss'


export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          {/* <title>vq0599-黄努努的个人网站</title> */}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="keywords" content="黄努努,博客,vq0599" />
          <meta name="description" content="黄努努的个人网站" />
          <Icon style={{ display: 'none' }} />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
