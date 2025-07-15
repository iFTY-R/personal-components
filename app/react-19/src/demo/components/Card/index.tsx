import React from 'react'
import './index.css'

interface Props {
  title?: string
  children?: React.ReactNode
  callback?: (props: Props) => void
}

const Card: React.FC<Props> = (props) => {
  props.callback?.(props)
  console.log(props)

  const event = new Event('on-card-click')
  event.params = {
    name: '',
  }
  // redux mobx zustand jotai
  const clickCard = () => {
    window.dispatchEvent(event)
  }

  return (
    <div className='card'>
      <header>
        <div>{props.title || '标题'}</div>
        <div>副标题</div>
      </header>
      <main>{props.children || '内容'}</main>
      <footer>
        <button onClick={clickCard}>确定</button>
        <button>取消</button>
      </footer>
    </div>
  )
}
export default Card

/* export default function Card(props: Props) {
  console.log(props)
  return (
    <div className='card'>
      <header>
        <div>{props.title}</div>
        <div>副标题</div>
      </header>
      <main>内容</main>
      <footer>
        <button>确定</button>
        <button>取消</button>
      </footer>
    </div>
  )
} */

declare global {
  interface Event {
    params: {
      name?: string
    }
  }
}
