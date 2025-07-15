import TsxStudy from './TsxStudy'
import Card from './components/Card'
import Message from './components/Message'
import './components/Message'

export default function DemoApp() {
  window.addEventListener('on-card-click', (e) => {
    console.log(e, '触发了')
  })
  return (
    <div>
      <TsxStudy></TsxStudy>

      <Card callback={(props) => console.log('通讯', props)}>
        <div style={{ color: 'red' }}>自定义内容</div>
      </Card>
      <Card title={'米家'}></Card>
      <button onClick={() => window.onShow()}>Click me</button>
    </div>
  )
}
