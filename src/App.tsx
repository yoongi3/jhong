import ControlPanel from './ControlPanel/ControlPanel'
import { GlobalStyle } from './GlobalStyles'
import Grid from './Grid/Grid'
import { useSnake } from './Snake/useSnake'

const GRID_WIDTH = 30
const GRID_HEIGHT = 17

function App() {
  const { snake, berry, score } = useSnake(GRID_WIDTH, GRID_HEIGHT); // You can use score from the hook

  return (
    <>
      <GlobalStyle/>
      <ControlPanel score={score}/>
      <Grid gridWidth={GRID_WIDTH} gridHeight={GRID_HEIGHT} snake={snake} berry={berry}/>
    </>
  )
}

export default App
