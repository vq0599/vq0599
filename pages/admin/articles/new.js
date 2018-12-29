import React from 'react'
import Layout from 'components/Layout'
import { withRouter } from 'next/router'
import { message } from 'antd'
import api from 'api'
import ArticleEditor from 'components/ArticleEditor'


@withRouter
class NewArticle extends React.Component {
  handleSave = ({ title, content }) => {
    console.log({ title, content })
    if (!title) {
      message.warn('文章标题不能为空！')
      return
    }

    if (!content) {
      message.warn('文章内容不能为空！')
      return
    }

    api.addArticle({ title, content }).then(resp => {
      if (resp.data.code === 'SUCCESS') {
        message.success('添加成功~', 1)
        this.props.router.push('/admin/articles')
      }
    })
  }

  render() {
    return (
      <Layout title="文章管理">
        <ArticleEditor
          onSave={this.handleSave}
        />
      </Layout>
    )
  }
}

export default NewArticle
