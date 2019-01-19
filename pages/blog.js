import React from 'react'
import Layout from 'components/Layout'
import api from 'api'
import { timeFormat } from 'utils/tool'
import Icon from 'components/Icon'


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
                    <div>{timeFormat(create_time)}</div>
                    <div><Icon glyph="read" /><span>{pv}</span></div>
                    <div><Icon glyph="good" /><span>{pv}</span></div>
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
