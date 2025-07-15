import { useEffect, useState } from 'react'
import Card from './components/Card'

export default function TsxStudy() {
  // T 后面跟了逗号，以免被 tsx 识别成 标签
  const handleClick = <T,>(params: T, e: React.MouseEvent) => {
    console.log('click', params, e)
    setCount(count + 1)
  }
  const style: React.CSSProperties = {
    color: 'red',
    userSelect: 'none',
  }

  const valueHtml: string = `<section style="color: brown;">Hello World</section>`

  const arr: string[] = ['a', 'b', 'c', 'd']

  const [count, setCount] = useState(0)

  useEffect(() => {
    // 可以获取 Dom 元素，发送请求
    console.log('xxxxxxx')
  }, [count])
  // setCount((prev) => prev + 100)
  return (
    <>
      <div>TsxStudy</div>
      <div style={style} className={`card ${'card'}`} onClick={(e) => handleClick(1, e)}>
        点击 {count}
      </div>
      {/* 设置 html */}
      <div dangerouslySetInnerHTML={{ __html: valueHtml }} />

      <ul>
        {arr.map((item, index) => (
          <li key={index} style={index % 2 === 0 ? { color: 'red' } : { color: 'blue' }}>
            {item}
          </li>
        ))}
      </ul>

      <Card callback={(props) => console.log('通讯', props)}>
        <div style={{ color: 'red' }}>自定义内容</div>
      </Card>
      <Card title={'米家'}></Card>
      <button onClick={() => window.onShow()}>Click me</button>
    </>
  )
}
