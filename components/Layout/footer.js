import config from 'config'


export default () => (
  <footer className="between">
    <p>© 2017-2019 Huang, All Rights Reserved</p>
    <div>
      <a target="_blank" href={config.GITHUB}><i className="vq0599 vq-github" /></a>
      <a href={`mailto:${config.EMAIL}`}><i className="vq0599 vq-mail" /></a>
    </div>
  </footer>
)
