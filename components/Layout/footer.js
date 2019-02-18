import config from 'config'
import Icon from 'components/Icon'


export default () => (
  <footer>
    <p>© 2017-2019 Huang, All Rights Reserved</p>
    <div>
      <a target="_blank" href={config.GITHUB}>
        <Icon glyph="github" />
      </a>
      <a href={`mailto:${config.EMAIL}`}>
        <Icon glyph="mail" />
      </a>
    </div>
  </footer>
)
