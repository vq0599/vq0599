import React from 'react'
import Link from 'next/link'
import Icon from 'components/Icon'


export default function HomePage() {
  return (
    <div className="home center">
      <h1 className="hidden">vq0599</h1>
      <img className="home-logo fadeInDown animated" src="/static/logo.png" />
      <div className="home-entry">
        <Link href="/blog">
          <a className="between fadeInRight animated">
            <span>BLOG</span>
            <Icon size={32} glyph="goto" />
          </a>
        </Link>
        <Link href="/about">
          <a className="between fadeInLeft animated">
            <span>ABOUT</span>
            <Icon size={32} glyph="goto" />
          </a>
        </Link>
      </div>
    </div>
  )
}

HomePage.title = '首页'
