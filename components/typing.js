import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


export default function Typing({ text, htmlTag, className, delay, interval, ...rest }) {
  const Tag = htmlTag
  const [loading, setLoading] = useState(true)
  const [innerText, setInnerText] = useState('|')

  const start = () => {
    let timer = null
    let count = 1
    const step = () => {
      setInnerText(text.slice(0, count))
      count += 1
      if (count > text.length) {
        clearInterval(timer)
      }
    }

    setLoading(false)
    step()

    timer = setInterval(step, interval)
  }

  useEffect(() => {
    if (delay) {
      setTimeout(start, delay * 1000)
    } else {
      start()
    }
  }, [])

  return (
    <Tag {...rest} className={classNames('typing', { stealth: loading }, className)}>
      {innerText}
    </Tag>
  )
}

Typing.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlTag: PropTypes.string,
  interval: PropTypes.number,
  delay: PropTypes.number,
}

Typing.defaultProps = {
  htmlTag: 'div',
  delay: 0,
  interval: 100,
}
