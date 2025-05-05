import ContentOverlay from './ContentOverlay/ContentOverlay';
import ControlPanel from './ControlPanel/ControlPanel';
import { GlobalStyle } from './GlobalStyles';
import Grid from './Grid/Grid';
import { ContentProvider } from './Providers/ContentProvider';
import { ScoreProvider } from './Providers/ScoreProvider'; 

function App() {
  return (
    <> 
      <GlobalStyle />
      <ScoreProvider>
        <ContentProvider>
          <ControlPanel />
          <Grid />
          <ContentOverlay />
        </ContentProvider >
      </ScoreProvider>
    </>
  );
}

export default App;