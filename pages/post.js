import React from 'react'
import api from 'api'
import Layout from 'components/Layout'
import { timeFormat } from 'utils/tool'
import Icon from 'components/Icon'


export default function postPage({ title, html, read_number, create_time }) {
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
    </Layout>
  )
}

postPage.getInitialProps = async ({ query }) => {
  const resp = await api.getArticle(query.id)

  return resp.data.data
}
