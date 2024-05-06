import PostList from '@/app/blog/PostList'
import type { Metadata, Viewport } from 'next'

const posts = [
  { id: '1', title: 'Post 1', slug: 'post-1' },
  { id: '2', title: 'Post 2', slug: 'post-2' },
  { id: '3', title: 'Post 3', slug: 'post-3' }
]

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export const metadata: Metadata = {
  title: 'Blog',
  description: '博客页面'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // 深色模式，还是浅色模式
  colorScheme: 'dark',
  // themeColor: 'black',
  // 媒体
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

// export function generateViewport({ params }: any) {
//   console.log(params);
//   return {
//     themeColor: '...',
//   }
// }

export default function Page() {
  return (
    <section>
      <h1>Hello, Blog Page!</h1>
      <PostList posts={posts} />
    </section>
  )
}
