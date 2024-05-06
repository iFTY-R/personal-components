import BackButton from '@/app/ui/button'

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton title='Close modal' />
      <div>{children}</div>
    </>
  )
}
