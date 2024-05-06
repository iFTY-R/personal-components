'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  // 由于 usePathname() 是一个客户端钩子，您需要将nav链接提取到客户端组件中，该组件可以导入到您的布局或模板中
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
        Home
      </Link>
      <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href='/dashboard'>
        Dashboard
      </Link>
      <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
        Blog
      </Link>
    </nav>
  )
}
