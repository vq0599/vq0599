import React from 'react'
import Mousetrap from 'mousetrap'
import PropTypes from 'prop-types'
import { Tooltip, Icon, message } from 'antd'
import MDEditor from './MDEditor'
import Portal from 'components/Portal'


export default class ArticleEditor extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onSave: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    content: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      content: props.content,
      fullscreen: false,
    }
  }

  componentDidMount() {
    this.addShortcutKeys()
  }

  componentWillUnmount() {
    this.clearShortcutKeys()
  }

  handleSave = () => {
    const { title, content } = this.state
    this.props.onSave({ title, content })
  }

  handleChange = (key, ev) => {
    this.setState({ [key]: ev.target.value })
  }

  handleToggleFullscreen = () => {
    this.setState({ fullscreen: true })
  }

  addShortcutKeys() {
    Mousetrap.prototype.stopCallback = () => {
      return false
    }

    Mousetrap.bind('mod+s', () => {
      this.handleSave()
      return false
    })

    Mousetrap.bind('esc', () => {
      this.setState({ fullscreen: false })
    })
  }

  clearShortcutKeys() {
    Mousetrap.reset()
  }

  render() {
    return (
      <div className="AEditor column">
        <div className="AEditor-title">
          <input
            onChange={ev => this.handleChange('title', ev)}
            value={this.state.title}
            placeholder="请输入文章标题"
          />
        </div>
        <div className="AEditor-options">
          <ul>
            <Tooltip title="插入图片">
              <li><Icon type="picture" /></li>
            </Tooltip>
            <Tooltip title="保存">
              <li onClick={this.handleSave}><Icon type="save" /></li>
            </Tooltip>
            <Tooltip title="全屏">
              <li><Icon type="fullscreen" onClick={() => this.handleToggleFullscreen(true)} /></li>
            </Tooltip>
          </ul>
        </div>
        <textarea
          className="AEditor-content"
          value={this.state.content}
          onChange={ev => this.handleChange('content', ev)}
          placeholder="请输入文章内容"
        />
        {
          this.state.fullscreen &&
          <Portal>
            <div className="AEditor-fullscreen">
              <MDEditor
                value={this.state.content}
                onChange={ev => this.handleChange('content', ev)}
                onLoad={() => message.info('按ESC键退出~')}
              />
            </div>
          </Portal>
        }
      </div>
    )
  }
}

