import classNames from 'classnames'


export default ({ glyph, size, className }) => (
  <svg className={classNames('icon', className)} aria-hidden="true" style={{ fontSize: size }}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
)
