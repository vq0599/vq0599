import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import api from 'api'
import { timeFormat } from 'utils/tool'
import Icon from 'components/Icon'


export default function Articles ({ articles }) {
  return (
    <Layout>
      <div className="article">
        <ul className="article-list">
          {
            articles.map(({ id, title, create_time, read_number, summary }) => (
              <li key={id}>
                <h3 className="article-title">
                  <Link href={`/p/${id}`}><a>{title}</a></Link>
                </h3>
                <p className="ellipsis article-summary">{summary}</p>
                <div className="article-infos">
                  <div>{timeFormat(create_time)}</div>
                  <div><Icon glyph="read" /><span>{read_number}</span></div>
                  {/* <div><Icon glyph="good" /><span>{like}</span></div> */}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}

Articles.getInitialProps = async () => {
  const resp = await api.getArticles()
  return {
    articles: resp.data.data,
  }
}
