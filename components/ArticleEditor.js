import React from 'react'
import Mousetrap from 'mousetrap'
import PropTypes from 'prop-types'
import { Tooltip, Icon, Tag, Upload, notification } from 'antd'
import MDEditor from './MDEditor'
import Portal from 'components/Portal'
import { stringSplice } from 'utils/tool'


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

  // 当前textarea光标位置
  cursorStart = this.props.content.length

  // textarea html element
  $textarea = null

  // 上传图片按钮
  $upload = null

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

  handleUploadSuccess = (resp) => {
    const mdImageCode = `![${this.filename}](${resp.data})`
    const content = stringSplice(this.state.content, this.cursorStart, mdImageCode)
    this.setState({ content })
  }

  handleRecordCursorPosition = () => {
    this.cursorStart = this.$textarea.selectionStart
  }

  handleRecordFilename = file => {
    this.filename = file.name.replace(/\.(jpg|jpeg|gif|png)$/i, '')
  }

  showShortcutKeys = () => {
    const shortcutKeys = [
      { press: 'ESC', label: '切换全屏' },
      { press: '⌘+S', label: '保存' },
      { press: '⌘+O', label: '插入图片' },
    ]

    notification.open({
      message: '快捷键提示',
      description: (
        <ul>
          {shortcutKeys.map(({ press, label }) => (
            <li key={press}><Tag color="green">{press}</Tag>{label}</li>
          ))}
        </ul>
      ),
      className: 'AEditor-notification',
      duration: 3,
    })
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
      this.setState({ fullscreen: !this.state.fullscreen })
    })

    Mousetrap.bind('mod+o', () => {
      this.$upload.click()
      return false
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
            <Upload
              action="/api/v1/upload/images"
              multiple={true}
              accept="image/*"
              onSuccess={this.handleUploadSuccess}
              showUploadList={false}
              onError={this.handleUploadError}
              beforeUpload={this.handleRecordFilename}
              supportServerRender={true}
            >
              <Tooltip title="插入图片">
                <li ref={ref => this.$upload = ref}><Icon type="picture" /></li>
              </Tooltip>
            </Upload>
            <Tooltip title="保存">
              <li onClick={this.handleSave}><Icon type="save" /></li>
            </Tooltip>
            <Tooltip title="全屏">
              <li><Icon type="fullscreen" onClick={() => this.handleToggleFullscreen(true)} /></li>
            </Tooltip>
          </ul>
        </div>
        <textarea
          ref={ref => this.$textarea = ref}
          className="AEditor-content"
          value={this.state.content}
          onChange={ev => this.handleChange('content', ev)}
          placeholder="请输入文章内容"
          onBlur={this.handleRecordCursorPosition}
        />
        {
          this.state.fullscreen &&
          <Portal>
            <div className="AEditor-fullscreen">
              <MDEditor
                value={this.state.content}
                onChange={ev => this.handleChange('content', ev)}
                onLoad={this.showShortcutKeys}
              />
            </div>
          </Portal>
        }
      </div>
    )
  }
}

