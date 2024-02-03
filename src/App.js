import './App.css';
import FAQ from './components/FAQ';
import QuizApp from './components/QuizApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<p>Hello world</p>} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/quizapps' element={<QuizApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
