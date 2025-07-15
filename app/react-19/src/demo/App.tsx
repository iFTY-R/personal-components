import TsxStudy from './TsxStudy'
import './components/Message'
import TicTacTieGame from "./views/TicTacTieGame";
import FilterableProductTable from './views/FilterableProductTable'

export default function DemoApp() {
  window.addEventListener('on-card-click', (e) => {
    console.log(e, '触发了')
  })
  return (
    <div>
      <TsxStudy></TsxStudy>
      {/* <TicTacTieGame></TicTacTieGame> */}
      {/* <FilterableProductTable></FilterableProductTable> */}
    </div>
  )
}
