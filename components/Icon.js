import classNames from 'classnames'


export default ({ glyph, size, color, className, ...rest }) => (
  <svg
    {...rest}
    className={classNames('icon', className)}
    aria-hidden="true"
    style={{
      fontSize: size,
      color,
    }}
  >
    <use xlinkHref={`#${glyph}`} />
  </svg>
)
