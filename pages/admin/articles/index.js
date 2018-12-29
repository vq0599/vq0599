import React from 'react'
import Layout from 'components/Layout'
import api from 'api'
import { Table, Icon, Modal, Button } from 'antd'
import { dateTimeFormat } from 'utils/tool'
import Link from 'next/link'
import { withRouter } from 'next/router'


@withRouter
class Articles extends React.Component {
  state = {
    articles: [],
    loading: true,
  }

  columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
      render: value => dateTimeFormat(value, 'Y-M-D h:m:s'),
    },
    {
      title: 'pv',
      dataIndex: 'pv',
      key: 'pv',
      sorter: (a, b) => b.pv - a.pv,
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: id => {
        return (
          <span className="Articles-table-options">
            <Icon type="edit" onClick={() => this.handleEdit(id)} />
            <Icon type="delete" onClick={() => this.handleDelete(id)} />
          </span>
        )
      },
    },
  ]

  componentDidMount() {
    this.initialize()
  }

  initialize() {
    api.getArticles().then(resp => {
      if (resp.data.code === 'SUCCESS') {
        this.setState({
          articles: resp.data.data,
          loading: false,
        })
      }
    })
  }

  fetchDeleteArticle(id) {
    api.deleteArticle(id).then(resp => {
      if (resp.data.code === 'SUCCESS') {
        this.reloadSource()
      }
    })
  }

  handleEdit = (id) => {
    this.props.router.push(`/admin/articles/edit/${id}`)
  }

  handleDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure delete this Article?',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => this.fetchDeleteArticle(id),
    })
  }

  reloadSource = () => {
    this.setState({ loading: true })
    this.initialize()
  }

  render() {
    return (
      <Layout title="文章管理">
        <div className="Articles">
          <div className="Articles-options">
            <Link href="/admin/articles/new">
              <Button type="primary">添加文章</Button>
            </Link>
          </div>
          <Table
            className="Articles-table"
            rowKey="id"
            columns={this.columns}
            dataSource={this.state.articles}
            loading={this.state.loading}
          />
        </div>
      </Layout>
    )
  }
}

export default Articles
