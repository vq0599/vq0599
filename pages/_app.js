import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import 'styles/entry.scss'


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
          <title>vq0599-黄努努的个人网站</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
