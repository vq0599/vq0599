import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Mousetrap from 'mousetrap'
import api from 'api'
import { Menu, Icon, Spin } from 'antd'


const MENU_DATA = [
  { title: '数据统计', icon: 'pie-chart', route: 'statistics' },
  { title: '文章管理', icon: 'desktop', route: 'articles' },
  { title: '网站留言', icon: 'inbox', route: 'comments' },
]

@withRouter
class Layout extends React.Component {
  state = {
    collapsed: false,
    loading: true,
  }

  componentDidMount() {
    this.authorization()
    this.initShortcutKeys()
  }

  initShortcutKeys() {
    Mousetrap.bind('mod+b', this.handleToggleCollapsed)
  }

  handleToggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  redirectToLogin() {
    this.props.router.push('/login')
  }

  authorization() {
    api.getLoginStatus().then(resp => {
      if (resp.data.code !== 'SUCCESS') {
        this.redirectToLogin()
      } else {
        this.setState({ loading: false })
      }
    })
  }

  get selectedKey() {
    return this.props.router.route.split('/')[2]
  }

  _renderLoading() {
    if (!this.state.loading) return
    const antIcon = <Icon type="loading" spin />

    return (
      <div className="Layout-loading center">
        <Spin indicator={antIcon} />
      </div>
    )
  }

  _renderContent() {
    if (this.state.loading) return
    return (
      <React.Fragment>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <div>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }

  render() {
    const collapsed = this.state.collapsed

    return (
      <div className="Layout">
        <nav style={{ width: collapsed ? 80: 200 }}>
          <div className="Layout-logo center">
            <img src="/static/avator.png" alt="logo" />
          </div>
          <Menu
            selectedKeys={[this.selectedKey]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {
              MENU_DATA.map(({ icon, title, route }) => (
                <Menu.Item key={route}>
                  <Link href={`/admin/${route}`}>
                    <a>
                      <Icon type={icon} />
                      <span>{title}</span>
                    </a>
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
          <Icon
            className="Layout-collapsed"
            style={{ fontSize: 20, color: '#999' }}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.handleToggleCollapsed}
          />
        </nav>
        <main>
          {this._renderLoading()}
          {this._renderContent()}
        </main>
      </div>
    )
  }
}

export default Layout
