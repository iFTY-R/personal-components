import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '仪表盘页面'
}

// export async function generateMetadata({ params }: any) {
//   return { title: '' };
// }

export default function DashboardLayout({
  children,
  user,
  admin
}: {
  children: React.ReactNode
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const role = 'admin'

  return (
    <section>
      <nav></nav>

      {user}
      {admin}
      <div>{role === 'admin' ? admin : user}</div>

      {children}
    </section>
  )
}
