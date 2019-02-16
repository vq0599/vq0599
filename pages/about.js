import React from 'react'
import Layout from 'components/Layout'
import Typing from 'components/typing.js'


const TITLE = 'Hi! Welcome to my website~'
const WELCOME = '大名 「 黄德豪 」，江湖人称「 黄努努 」~ 不是因为我特别努力，而是因为我特别嘚瑟~2333333~'

export default function About() {
  return (
    <Layout>
      <div className="about">
        <div className="about-welcome">
          <Typing interval={40} className="about-welcome-title" htmlTag="h1" text={TITLE} />
          <Typing delay={1.2} interval={40} className="about-welcome-content" htmlTag="p" text={WELCOME} />
        </div>
        <section className="about-timeline">
          <ul className="timeline">
            <li>
              <h4>2016.6 => 毕业于江苏淮海工学院（学士）</h4>
              <div>虽然总是考倒数第一~ 不过嘛~ 好歹也是第一是么~ 加油~</div>
            </li>
            <li>
              <h4>2016.7 => 小书包（北京）网络科技有限公司</h4>
              <div>
                  高德地图团队出来创业一家小公司，十几个人，前端当然就我一个啦。
                  主要工作是使用jQuery和Bootstrap搭个后台管理系统，也写一些服务端Golang。
                  当初觉得工作内容有些Low，现在回过头来看看，其实对于当时刚毕业的我正合适，也有足够的时间打好基础。整体技术水平很不错，毕竟是2016年就敢于把Golang用于生产环境的公司。
                  虽然我待得时间不长，还是十分感谢这一段经历和我的Leader。
              </div>
            </li>
            <li>
              <h4>2017.6 => 站酷网</h4>
              <div />
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
