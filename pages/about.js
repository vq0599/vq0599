import React from 'react'
import Layout from 'components/Layout'
import Typing from 'components/typing.js'
import config from 'config'
import Head from 'next/head'


const TITLE = 'Hi! Welcome to my website~'
const WELCOME = '大名 「 黄德豪 」，江湖人称「 黄努努 」~ 不是因为我特别努力，而是因为我特别嘚瑟~2333333~'
const timelines = [
  {
    date: '2016.7',
    title: '小书包（北京）网络科技有限公司',
    description: `来自高德地图的一个创业团队，专职前端当然就我一个啦~
      主要工作是基于Bootstrap搭个后台管理系统，也写一些服务端（Golang）。
      当初幼稚地觉得工作内容有些落后，现在回过头来看，却十分感谢这一段职业生涯初期的经历。`,
    projects: [
      { title: '小书包后台管理系统', link: 'https://www.dyxsb.net/login', description: '' },
    ],
  },
  {
    date: '2017.6',
    title: '站酷网',
    description: `一个专业性比较高的前端团队，React技术栈为主，正式步入现代化前端领域~
      接触了不同类型的项目，在每个项目中担任不同的角色，专业水平也由此大幅提升~
      更重要的是，这份工作解决了我的生存问题。拿自己的，不手短~
    `,
    projects: [
      { title: '站酷招聘移动版', link: 'https://m.zcool.com.cn/job/', description: 'SPA' },
      { title: '站酷魔方', link: 'https://51.design/', description: '大型重交互可视化建站系统' },
      { title: '站酷海洛Plus', link: 'https://plus.hellorf.com/', description: 'Next.js服务端渲染 + TypeScript' },
    ],
  },
]

export default function About() {
  return (
    <Layout>
      <div className="about">
        <div className="about-welcome">
          <Typing interval={30} className="about-welcome-title" htmlTag="h1" text={TITLE} />
          <Typing delay={1.2} interval={30} className="about-welcome-content" htmlTag="p" text={WELCOME} />
          <Typing
            delay={2.8}
            interval={30}
            className="about-welcome-github"
            htmlTag="a"
            text={config.GITHUB}
            target="_blank"
            href={config.GITHUB}
          />
        </div>
        <section>
          <h2>流浪</h2>
          <ul className="about-timeline">
            {
              timelines.map(({ date, title, description, projects }, index) => (
                <li key={index}>
                  <h3>{date} => {title}</h3>
                  <ol>
                    {
                      projects.map((project, i) => (
                        <li key={i}>
                          <a className="u-link" target="_blank" href={project.link}>{project.title}</a>
                          { project.description && `（${project.description}）` }
                        </li>
                      ))
                    }
                  </ol>
                  <p>{description}</p>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>冷饭</h2>
          <div className="markdown">
            <p>很可惜，生平没有什么爱好，只能搬出屈指可数的几件事介绍自己~ 所以我称之为「冷饭」~</p>
            <p>曾经是一名不太专业的骑行玩家，参加过线下的比赛（连云港环连岛自行车赛），成功缴获一瓶酱油~ 最远的一次骑行是从连云港到北京昌平，五天半，近一千公里。陆续有过念头离开北京时骑一次川藏线，后来因为一些世俗之事就不了了之了~</p>
            <p>大学时偶然接触到三维立体图，甚感有趣，于是收集了许多~ 话说当年在学校识别这玩意儿也是获过奖的噢，厉害吧，笑哭~
              毕业之初写过几行代码爬了一些三维立体图，有兴趣的可以<a href="https://github.com/vq0599/node-images-crawler" target="_blank">戳我</a>了解一下~</p>
          </div>
        </section>
        <Head>
          <title>{`关于 - ${config.META_TITLE}`}</title>
        </Head>
      </div>
    </Layout>
  )
}
