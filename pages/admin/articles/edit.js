import React from 'react'
import Layout from 'components/Layout'
import { message } from 'antd'
import api from 'api'
import ArticleEditor from 'components/ArticleEditor'


class NewArticle extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await api.getArticle(query.id)
    return { article: resp.data.data }
  }

  handleSave = ({ title, content }) => {
    if (!title) {
      message.warn('文章标题不能为空！')
      return
    }

    if (!content) {
      message.warn('文章内容不能为空！')
      return
    }

    api.editArticle({ title, content, id: this.props.article.id }).then(resp => {
      if (resp.data.code === 'SUCCESS') {
        message.success('保存成功~', 1)
      }
    })
  }

  render() {
    const { title, content } = this.props.article
    return (
      <Layout title="文章管理">
        <ArticleEditor
          onSave={this.handleSave}
          title={title}
          content={content}
        />
      </Layout>
    )
  }
}

export default NewArticle
