import ReactDOM from 'react-dom/client'
import './index.css'

const Message = () => {
  return <div>消息提示</div>
}

interface Item {
  root: ReactDOM.Root
  messageContainer: HTMLElement
}

const messageArr: Item[] = []

window.onShow = () => {
  // console.log('消息提示')
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message-container'
  messageContainer.style.top = `${messageArr.length * 50}px`
  document.body.appendChild(messageContainer)

  const root = ReactDOM.createRoot(messageContainer)
  root.render(<Message />)

  messageArr.push({ root, messageContainer })
  setTimeout(() => {
    const item = messageArr.find((item) => item.messageContainer === messageContainer)
    item?.root.unmount()
    document.body.removeChild(messageContainer)
    messageArr.splice(messageArr.indexOf(item!), 1)
  }, 3000)
}

// 声明扩容
declare global {
  interface Window {
    onShow: () => void
  }
}

export default Message
