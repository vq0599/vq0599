import Layout from 'components/Layout'
import config from 'config'
import Icon from 'components/Icon'


const SectionTitle = ({ title }) => (
  <h2 className="resume-title"><div>{title}</div></h2>
)

const experiences = [
  {
    title: '小书包（北京）网络有限公司',
    duration: '2016-07 — 2017-06',
    projects: [
      {
        title: '“党员小书包”后台管理系统',
        description: '基于jQuery和Bootstrap的后台管理系统，前端server使用Golang（Gin）搭建。现在看来有些落后了，值得讨论的点并不多，但对刚入职场的我的帮助很大。',
      },
    ],
  },
  {
    title: '北京站酷网络科技有限公司',
    duration: '2017-06 — 至今',
    projects: [
      {
        title: '站酷招聘WAP版本',
        link: 'https://m.zcool.com.cn/job',
        description: `标准的React单页应用，经典组合React + Redux + React-Router，
        采用Flexible方案和编译阶段的pxtorem以解决多屏适配问题。
        职业生涯的第一个React项目，现学现用，和改版前的JSP相比，极大幅度地提高了用户体验。`,
      },
      {
        title: '站酷魔方可视化建站系统',
        link: 'https://51.design',
        description: `集成了SPA、SSR、Node.js、小程序、H5等多个项目的大型重交互可视化建站系统，历时一年半的开发周期，<strong>从0到1全程由我对前端领域（人+事）统筹规划</strong>。
        编辑端主要以React + Redux/MobX构建，访问端采用使用Next.js服务端渲染的方案（SEO+首屏）。
        基于webpack的MPA + Code Splitting的打包方式，搭配External处理稳定的依赖包（CDN及缓存），保证大型项目的基本性能。
        部署了Sentry生产环境异常监控系统，保证生产环境快速发现并解决问题。`,
      },
      {
        title: '站酷海洛Plus',
        link: 'https://plus.hellorf.com',
        description: `基于Next.js和TypeScript的ToB后台管理类项目。
        技术栈比较奔放，将React Hooks（16.8版本）实践于生产环境，打造了独立于源码底层组件库，采用SVG Symbols的图标解决方案。
        搭以Eslint和Prettier，保证代码质量。`,
      },
    ],
  },
]

export default function ResumePage() {
  return (
    <Layout>
      <div className="resume">
        <div className="resume-header">
          <h1>黄德豪</h1>
          <div>应聘职位：高级前端工程师</div>
        </div>
        <div>
          <ul className="resume-infos">
            <li><Icon glyph="gender" /><span>男</span></li>
            <li><Icon glyph="age" /><span>25</span></li>
            <li><Icon glyph="location" /><span>北京</span></li>
            <li><Icon glyph="telephone" /><span>18500041947</span></li>
            <li><Icon glyph="email" /><span>{config.EMAIL}</span></li>
            <li><Icon glyph="university" /><span>淮海工学院</span></li>
            <li><Icon glyph="profession" /><span>信息与计算科学</span></li>
          </ul>
          <ul className="resume-infos">
            <li><Icon glyph="website" /><a href={config.WEBSITE}>{config.WEBSITE}</a></li>
            <li><Icon glyph="github" /><a href={config.GITHUB}>{config.GITHUB}</a></li>
          </ul>
        </div>
        <section>
          <SectionTitle title="职业经历" />
          {
            experiences.map(({ title, duration, projects }, index) => (
              <div key={index} className="resume-experience">
                <h3 className="between">
                  <span>{duration}</span>
                  <span>{title}</span>
                </h3>
                <ul>
                  {projects.map(({ title, description, link }, i) => (
                    <li key={`${index}-${i}`}>
                      <span>{title}</span>
                      { link && <a target="_blank" className="link" href={link}>{link}</a> }
                      <p dangerouslySetInnerHTML={{ __html: description }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </section>
        <section>
          <SectionTitle title="技能描述" />
          <ul className="resume-skill">
            <li>前端基础好，原生JavaScript（ES6+）掌握出色。</li>
            <li>擅长React及同构渲染Next.js技术栈，对Ant Design源码级别的了解。</li>
            <li>了解社区主流的最佳实践，包括但不限于MobX/Redux/TypeScript/Immutable。</li>
            <li>熟悉前端项目构建方案（Webpack/Babel），能够根据业务场景搭建适当的基础设施。</li>
            <li>不设限，对全栈Web领域（Node.js、Golang）有所学习。（基于Golang和MySQL的RESTful API服务<a className="link" href="https://github.com/vq0599/vq0599-server">https://github.com/vq0599/vq0599-server</a>）</li>
            <li>不拘泥于具体技术，需要什么就能拾起什么。</li>
          </ul>
        </section>
        <section>
          <SectionTitle title="自我评价" />
          <ul className="resume-skill">
            <li>职业素质好，连续两年的最佳绩效Top奖金。</li>
            <li>有自主思维，重视技术但不唯技术论。</li>
            <li>如果有需要，可能可以独自带领产品线。</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

ResumePage.title = '简历'
