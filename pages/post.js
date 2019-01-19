import React from 'react'
import api from 'api'
import Layout from 'components/Layout'
import { timeFormat } from 'utils/tool'


export default class Article extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await api.getArticle(query.id)

    return resp.data.data
  }

  render() {
    const { title, html, pv, create_time } = this.props
    return (
      <Layout>
        <article className="post">
          <h1>{title}</h1>
          <div className="post-infos">
            <span>{timeFormat(create_time)}</span>
            <span> <i className="vq0599 vq-read" /> {pv}</span>
            <span> <i className="vq0599 vq-like" /> {pv}</span>
          </div>
          <div className="post-content markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Layout>
    )
  }
}
