import Link from 'next/link'
import Navigation from './nav'


export default function Header() {
  return (
    <header className="between">
      <Link href="/">
        <a><img src="/static/title.png" /></a>
      </Link>
      <Navigation />
    </header>
  )
}


