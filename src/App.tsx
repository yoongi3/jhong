import ControlPanel from './ControlPanel/ControlPanel'
import { GlobalStyle } from './GlobalStyles'
import Grid from './Grid/Grid'

const GRID_WIDTH = 30
const GRID_HEIGHT = 17

function App() {
  return (
    <>
      <GlobalStyle/>
      <ControlPanel/>
      <Grid gridWidth={GRID_WIDTH} gridHeight={GRID_HEIGHT}/>
    </>
  )
}

export default App
