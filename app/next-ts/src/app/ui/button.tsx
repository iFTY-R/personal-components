'use client'
import { useRouter } from 'next/navigation'

export default function BackButton({ title }: { title?: string }) {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.back()
      }}
    >
      {title || '返回'}
    </button>
  )
}
