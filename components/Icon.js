import classNames from 'classnames'


export default ({ glyph, size, color, rotate, className, ...rest }) => (
  <svg
    {...rest}
    className={classNames('icon', className)}
    aria-hidden="true"
    style={{
      fontSize: size,
      color,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
    }}
  >
    <use xlinkHref={`#${glyph}`} />
  </svg>
)
