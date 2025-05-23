import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.scss'
import Home from './Pages/Home';


function App() {
  return (
    <Router basename="/Portfolio_MBT">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
