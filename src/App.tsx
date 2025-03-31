import ControlPanel from './ControlPanel/ControlPanel';
import { GlobalStyle } from './GlobalStyles';
import Grid from './Grid/Grid';
import { ScoreProvider } from './Providers/ScoreProvider'; // Import ScoreProvider

function App() {
  return (
    <ScoreProvider> {/* Wrap your app to provide the score context */}
      <GlobalStyle />
      <ControlPanel />
      <Grid />
    </ScoreProvider>
  );
}

export default App;