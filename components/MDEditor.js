import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import CodeBlock from 'components/codeBlock'
import 'highlight.js/styles/atom-one-light.css'


const noop = () => {}
export default class Editor extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onLoad: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    onLoad: noop,
  }

  state = {
    value: '',
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <div className="MDEditor">
        <textarea className="MDEditor-source" value={this.props.value} onChange={this.props.onChange} />
        <ReactMarkdown
          className="MDEditor-preview md-style-air"
          source={this.props.value}
          renderers={{ code: CodeBlock }}
        />
      </div>
    )
  }
}
