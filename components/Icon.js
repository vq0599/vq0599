export default ({ glyph }) => (
  <svg className="icon" aria-hidden="true">
    <use xlinkHref={`#${glyph}`} />
  </svg>
)
