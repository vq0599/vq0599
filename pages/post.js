import React from 'react'
import api from 'api'
import Layout from 'components/Layout'


export default class Article extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await api.getArticle(query.id)

    return resp.data.data
  }

  render() {
    return (
      <Layout>
        Hello Post
      </Layout>
    )
  }
}
