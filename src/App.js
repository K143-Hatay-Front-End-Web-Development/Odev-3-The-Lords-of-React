import './App.css';
import Home from './pages/Home';
import './App.css'
import Question from './pages/Question';
import ResultPage from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import { default as DataProvider } from './context/use-data';
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
