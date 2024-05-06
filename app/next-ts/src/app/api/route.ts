import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'

/*
export async function GET(request: Request) {
  // const token = request.cookies.get('token')
  // 或者
  const cookieStore = cookies()
  const token = cookieStore.get('token') || { value: '' }

  // const requestHeaders = new Headers(request.headers)
  // 或者
  const headersList = headers()
  const referer = headersList.get('referer');

  // redirect('https://nextjs.org/');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Set-Cookie': `token=${ token.value }`,
      referer,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    } as HeadersInit,
  })
}
*/

/*
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
*/
