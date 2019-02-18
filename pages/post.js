import React from 'react'
import api, { API_PREFIX } from 'api'
import Layout from 'components/Layout'
import { timeFormat } from 'utils/tool'
import Icon from 'components/Icon'
import config from 'config'
import Head from 'next/head'


export default function postPage({ id, title, html, read_number, create_time }) {
  return (
    <Layout>
      <article className="post">
        <h1>{title}</h1>
        <div className="post-infos">
          <div>{timeFormat(create_time)}</div>
          <div><Icon glyph="read" /><span>{read_number}</span></div>
          {/* <div><Icon glyph="good" /><span>{pv}</span></div> */}
        </div>
        <div className="post-content markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <img className="hidden" src={`${config.DOMAIN}${API_PREFIX}/pv/${id}`} />
      <Head>
        <title>{`${title} - ${config.META_TITLE}`}</title>
      </Head>
    </Layout>
  )
}

postPage.getInitialProps = async ({ query }) => {
  const resp = await api.getArticle(query.id)

  return resp.data.data
}
