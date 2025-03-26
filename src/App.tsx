import ControlPanel from './ControlPanel/ControlPanel'
import { GlobalStyle } from './GlobalStyles'
import Grid from './Grid/Grid'
import { useSnake } from './Hooks/useSnake'


function App() {
  const { snake, berry, score } = useSnake(); // You can use score from the hook

  return (
    <>
      <GlobalStyle/>
      <ControlPanel score={score}/>
      <Grid snake={snake} berry={berry}/>
    </>
  )
}

export default App
