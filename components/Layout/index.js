import React from 'react'
import Header from './header'
import Footer from './footer'


class Layout extends React.PureComponent {
  state = {}
  render() {
    return (
      <div id="layout" className="layout">
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
