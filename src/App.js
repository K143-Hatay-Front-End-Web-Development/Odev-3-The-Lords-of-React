import './App.css';
import Page from './pages';
import {default as ScoreProvider} from './context/use-score'

function App() {
  return (
    <div className='App'>
      
        <ScoreProvider>
          <Page />
        </ScoreProvider>
      
    </div>
  );
}

export default App;
