import React from 'react'
import Layout from 'components/Layout'
import api from 'api'
import { timeFormat } from 'utils/tool'


export default class Articles extends React.Component {
  static async getInitialProps() {
    const resp = await api.getArticles()
    return {
      articles: resp.data.data,
    }
  }

  render() {
    return (
      <Layout>
        <div className="article">
          <ul className="article-list">
            {
              this.props.articles.map(({ id, title, create_time, pv, summary }) => (
                <li key={id}>
                  <h3 className="article-title"><a href={`/p/${id}`}>{title}</a></h3>
                  <p className="ellipsis article-summary">{summary}</p>
                  <div className="article-infos">
                    <span>{timeFormat(create_time)}</span>
                    <span> <i className="vq0599 vq-read" /> {pv}</span>
                    <span> <i className="vq0599 vq-like" /> {pv}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </Layout>
    )
  }
}
