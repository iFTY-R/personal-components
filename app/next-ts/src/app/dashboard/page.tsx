import { Suspense } from 'react'

export default function Page() {
  return (
    <section>
      <h1>Hello，Dashboard Page!</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div>PostFeed</div>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <div>Weather</div>
      </Suspense>
    </section>
  )
}
