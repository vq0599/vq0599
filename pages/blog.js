import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import api from 'api'
import { timeFormat } from 'utils/tool'
import Icon from 'components/Icon'
import classNames from 'classnames'


export default function Articles ({ data, page_total, page }) {
  return (
    <Layout>
      <div className="article">
        <ul className="article-list">
          {
            data.map(({ id, title, create_time, read_number, summary }) => (
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
        {
          page_total > 1 &&
          <div className="article-pagination between">
            <Link href={`/blog/page/${page - 1}`}>
              <a className={classNames({ hidden: page - 1 < 1 })}>
                <Icon glyph="arrow" rotate={180} size={22} />
                <span>上一页</span>
              </a>
            </Link>
            <Link href={`/blog/page/${page + 1}`}>
              <a className={classNames({ hidden: page === page_total })}>
                <span>上一页</span>
                <Icon glyph="arrow" size={22} />
              </a>
            </Link>
          </div>
        }
      </div>
    </Layout>
  )
}

Articles.getInitialProps = async ({ query: { page } }) => {
  const resp = await api.getArticles({ page })
  return resp.data.data
}
