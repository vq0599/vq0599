import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


export default class Portal extends React.Component {
  static propTypes = {
    getContainer: PropTypes.func,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    getContainer: () => document.body,
  }

  componentDidMount() {
    this.createContainer()
  }

  componentWillUnmount() {
    this.removeContainer()
  }

  createContainer() {
    this._container = this.props.getContainer()
    this.forceUpdate()
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container)
    }
  }

  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container)
    }

    return null
  }
}
