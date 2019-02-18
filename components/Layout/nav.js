import { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'


const routes = [
  { path: '/', label: '首页' },
  { path: '/blog', label: '博客' },
  { path: '/about', label: '关于' },
]

function Navigation({ router }) {
  const [active, setActive] = useState(false)

  return (
    <nav className="nav">
      <div className={classNames('nav-entry',{ active })} onClick={() => setActive(!active)} />
      <ul className={classNames('nav-list', { active })}>
        {routes.map(({ path, label }) => (
          <li key={path} className={classNames({ active: path === router.route })}><Link href={path}>
            <a>{label}</a>
          </Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default withRouter(Navigation)
