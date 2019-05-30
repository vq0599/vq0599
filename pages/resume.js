import Layout from 'components/Layout'
import config from 'config'
import Icon from 'components/Icon'


const SectionTitle = ({ title }) => (
  <h2 className="resume-title"><div>{title}</div></h2>
)

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
            <li><Icon glyph="university" /><span>江苏海洋大学</span></li>
            <li><Icon glyph="profession" /><span>信息与计算科学</span></li>
          </ul>
          <ul className="resume-infos">
            <li><Icon glyph="website" /><a href={config.WEBSITE}>{config.WEBSITE}</a></li>
            <li><Icon glyph="github" /><a href={config.GITHUB}>{config.GITHUB}</a></li>
          </ul>
        </div>
        <section>
          <SectionTitle title="职业经历" />
          <div className="resume-experience">
            <h3 className="between">
              <span>小书包（北京）网络有限公司</span>
              <span>2016-07 — 2017-06</span>
            </h3>
            <ul>
              <li>
                <span>“党员小书包”后台管理系统</span>
                <div>
                  毕业后第一个项目，基于jQuery和Bootstrap搭建后台管理系统，也写一些服务端Golang。
                  作为创业公司唯一一个专职前端，很快就独挑大梁并指导两名实习生。现在看来项目有些落后了，值得讨论的点并不多，但对初入职场的我的帮助很大。
                </div>
              </li>
            </ul>
          </div>
          <div className="resume-experience">
            <h3 className="between">
              <span>北京站酷网络科技有限公司</span>
              <span>2017-06 — 至今</span>
            </h3>
            <ul>
              <li>
                <span>站酷招聘WAP版</span>
                <a target="_blank" href="https://m.zcool.com.cn/job">https://m.zcool.com.cn/job</a>
                <div>
                  职业生涯的第一个React项目，标准的移动端单页WEBAPP。
                  采用了经典组合React + Redux + React-Router，基于Flexible和编译阶段pxtorem的方案以解决多屏适配问题。现学现用，从0到1皆为我独自完成。
                  作为我司新成立的前端团队的第一个项目作品，得到了公司广泛的好评。比起改版之前的JSP技术栈，切实的提高了开发效率和用户体验。
                </div>
              </li>
              <li>
                <span>站酷魔方可视化建站系统</span>
                <a target="_blank" href="https://51.design">https://51.design</a>
                <div>
                  一个集成了SPA，SSR同构渲染、小程序、H5等多个项目的大型重交互可视化建站系统，历时一年+的开发周期。
                  <strong>作为项目前端owner，从0到1全程由我对前端领域统筹规划</strong>。主要职责为构建项目基础设施，开发核心功能可视化建站编辑器，规划团队日常工作并帮助新人成长。
                  <ol>
                    <li>建立了标准的Git-Flow工作流程，通过ESlint和Code Review机制保证代码质量。</li>
                    <li>基于Webpack的MPA + Code Splitting的构建方式，辅助External CDN处理稳定第三方包，保证基本的加载性能。</li>
                    <li>重交互的核心功能以React + Redux开发，用户访问端以Node.js + Next.js为基础同构渲染，以满足SEO和首屏快速渲染的强需求。</li>
                    <li>生产环境部署了Sentry异常监控系统，保证快速发现并解决问题。</li>
                  </ol>
                  以下是我从核心功能中总结出的React Library：<a target="_blank" href="https://github.com/zcued/react-dragline">https://github.com/zcued/react-dragline</a>
                </div>
              </li>
              <li>
                <span>站酷海洛Plus2.0</span>
                <a target="_blank" href="https://plus.hellorf.com">https://plus.hellorf.com</a>
                <div>
                  一个ToB类正版视觉内容平台，比较典型的大型<strong>重代码复用</strong>的项目。
                  <ol>
                    <li>基于Next.js和TypeScript构建项目，优化开发体验的同时大幅度减少了低级错误的发生。</li>
                    <li>技术栈比较奔放，将React Hooks（16.8）实践于生产环境，并打造了独立于项目源码的基础组件库：<a target="_blank" href="https://github.com/zcued/poseidon">https://github.com/zcued/poseidon</a>。</li>
                    <li>基于styled-components搭建“去CSS化”架构体系，采用动态配置样式组件化的封装方案，减少80%常规的CSS代码。</li>
                    <li>业务开发以“低粒度封装，多层次组合”为最佳实践原则，在代码复用和可维护性之间取平衡。</li>
                  </ol>
                  除此之外，项目的基础设施比较完善，TSLint + Prettier + Pre Commit检查、PM2管理部署等等，算是成熟度比较高的一个项目。
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <SectionTitle title="技能描述" />
          <ul className="resume-skill">
            <li>WEB基础知识扎实，原生JavaScript（ES6+）掌握出色。</li>
            <li>擅长React（Next.js）技术栈，了解社区主流的技术方案和最佳实践，对常用的库（Ant Design、Redux）源码程度的掌握。
            </li>
            <li>不设限，对全栈WEB领域（Node.js、Golang）均有所学习。
              （我为个人网站写的基于Go的RESTful API服务<a href="https://github.com/vq0599/vq0599-server">https://github.com/vq0599/vq0599-server</a>）
            </li>
            <li>熟悉现代化的前端项目构建方案（Webpack），理解其原理并能够根据业务场景搭建适当的基础设施。</li>
            <li>掌握开发人员的基础技术栈（Git、Linux、Nginx等），可独立完成从开发到部署整个流程。</li>
            <li>不拘泥于具体技术，需要什么就能拾起什么。</li>
          </ul>
        </section>
        <section>
          <SectionTitle title="自我评价" />
          <ul className="resume-skill">
            <li>职业素质好，连续两年的最佳绩效。</li>
            <li>有自主思维，重视技术但不唯技术论。</li>
            <li>如果有需要，也许可以带小团队。</li>
            <li>希望的发展方向是WEB全栈，精力足够的话，也很愿意研究一下大前端。</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

ResumePage.title = '简历'
