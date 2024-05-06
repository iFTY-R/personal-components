import BackButton from '@/app/ui/button'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: {
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: params.slug,
    openGraph: {
      images: [...previousImages]
    }
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Hello, {params.slug}</h1>
      <BackButton />
    </div>
  )
}
