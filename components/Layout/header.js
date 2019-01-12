import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'


const Header = ({ router }) => {
  const routes = [
    { path: '/', label: '首页' },
    { path: '/blog', label: '博客' },
    { path: '/about', label: '关于' },
  ]

  return (
    <header className="between">
      <a href="/">vq0599</a>
      <nav>
        {routes.map(({ path, label }) => (
          <Link key={path} href={path}>
            <a className={classNames({ active: path === router.route })}>{label}</a>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default withRouter(Header)


