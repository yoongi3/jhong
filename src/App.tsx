import { GlobalStyle } from './GlobalStyles'
import Grid from './Grid/Grid'

const GRID_WIDTH = 30
const GRID_HEIGHT = GRID_WIDTH/1.5

function App() {
  return (
    <>
      <GlobalStyle/>
      <Grid gridWidth={GRID_WIDTH} gridHeight={GRID_HEIGHT}/>
    </>
  )
}

export default App
